from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import numpy as np
import tensorflow as tf
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model(
    "cardiovascular_model.h5"
)

scaler = joblib.load(
    "scaler.pkl"
)

class PatientData(BaseModel):
    age: int
    gender: int
    height: int
    weight: int
    ap_hi: int
    ap_lo: int
    cholesterol: int
    gluc: int
    smoke: int
    alco: int
    active: int

@app.get("/")
def home():
    return {
        "message": "CardioPredict API Running"
    }

@app.post("/predict")
def predict(data: PatientData):

    bmi = data.weight / (
        (data.height / 100) ** 2
    )

    features = np.array([[
        data.age,
        data.gender,
        data.height,
        data.weight,
        data.ap_hi,
        data.ap_lo,
        data.cholesterol,
        data.gluc,
        data.smoke,
        data.alco,
        data.active
    ]])

    features = scaler.transform(features)

    prediction = model.predict(features)

    risk = float(
        prediction[0][0] * 100
    )

    if risk < 40:
        level = "Low"
    elif risk < 70:
        level = "Medium"
    else:
        level = "High"

    return {
        "risk_percentage": round(risk, 2),
        "risk_level": level,
        "bmi": round(bmi, 2)
    }