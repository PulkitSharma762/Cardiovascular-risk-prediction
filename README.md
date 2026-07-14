# ❤️ Cardiovascular Risk Prediction

A full-stack Deep Learning web application that predicts the risk of cardiovascular disease based on a patient's health information. The application provides an intuitive user interface for entering patient details and displays the predicted cardiovascular risk percentage along with the corresponding risk level.

---

📌 Project Overview

Cardiovascular diseases are among the leading causes of death worldwide. Early prediction can help patients seek timely medical attention and adopt healthier lifestyles.

This project uses a Deep Learning model trained on cardiovascular health data to estimate the probability of heart disease. The trained model is deployed using FastAPI, while the frontend is developed with React and Tailwind CSS to provide a modern and responsive user experience.

---

✨ Features

- Predicts cardiovascular disease risk
- Calculates and displays risk percentage
- Displays Low, Medium, or High risk level
- Calculates Body Mass Index (BMI)
- Provides basic health recommendations
- Responsive and modern user interface
- REST API powered by FastAPI
- Deep Learning model integration

---

🛠️ Tech Stack

Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

Backend

- FastAPI
- TensorFlow / Keras
- Scikit-learn
- NumPy
- Joblib

Machine Learning

- Deep Neural Network (TensorFlow/Keras)
- StandardScaler
- Google Colab (Model Training)

---

📂 Project Structure
```text
Cardiovascular-risk-prediction/

├── backend/
│   ├── cardiovascular_model.h5
│   ├── scaler.pkl
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```
---

⚙️ Installation

Clone the repository

git clone https://github.com/PulkitSharma762/Cardiovascular-risk-prediction.git

cd Cardiovascular-risk-prediction

---

▶️ Run Backend

cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000

---

▶️ Run Frontend

Open another terminal.

cd frontend

npm install

npm run dev

Frontend runs at:

http://localhost:5173

---

🧠 Machine Learning Model

- Model Type: Deep Neural Network
- Framework: TensorFlow / Keras
- Model File: "cardiovascular_model.h5"
- Feature Scaling: StandardScaler ("scaler.pkl")
- Training Platform: Google Colab

---

📊 Input Features

- Age
- Gender
- Height
- Weight
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Cholesterol Level
- Glucose Level
- Smoking Status
- Alcohol Consumption
- Physical Activity

---

📤 Output

The application predicts:

- Cardiovascular Risk Percentage
- Risk Level (Low / Medium / High)
- Body Mass Index (BMI)
- Health Recommendations

---

🚀 Future Improvements

- User authentication
- Patient history management
- Prediction reports (PDF)
- Interactive data visualizations
- Cloud deployment
- Explainable AI (XAI)

---

👨‍💻 Author

Pulkit Sharma

GitHub: https://github.com/PulkitSharma762

---

📄 License

This project is developed for educational and learning purposes.