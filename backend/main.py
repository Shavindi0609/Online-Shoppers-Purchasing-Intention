from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import os


# ==========================================
# FastAPI Application
# ==========================================

app = FastAPI(
    title="Online Shoppers Purchasing Intention API",
    description="ML API for predicting online purchase intention",
    version="1.0.0"
)


# ==========================================
# CORS Configuration
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# Load Trained ML Pipeline
# ==========================================

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "models",
    "final_pipeline.pkl"
)

model = joblib.load(MODEL_PATH)


# ==========================================
# Request Data Model
# ==========================================

class ShopperData(BaseModel):
    Administrative: int
    Administrative_Duration: float
    Informational: int
    Informational_Duration: float
    ProductRelated: int
    ProductRelated_Duration: float
    BounceRates: float
    ExitRates: float
    PageValues: float
    SpecialDay: float
    Month: str
    OperatingSystems: int
    Browser: int
    Region: int
    TrafficType: int
    VisitorType: str
    Weekend: bool


# ==========================================
# Root Endpoint
# ==========================================

@app.get("/")
def root():
    return {
        "message": "Online Shoppers Purchasing Intention API is running",
        "status": "success"
    }


# ==========================================
# Health Check Endpoint
# ==========================================

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "model": "loaded",
        "service": "Online Shopper Purchase Prediction API"
    }


# ==========================================
# Model Information Endpoint
# ==========================================

@app.get("/model-info")
def model_info():
    return {
        "model": "Logistic Regression",
        "problem_type": "Binary Classification",
        "target": "Revenue",
        "input_features": 22,
        "training_records": 9764,
        "testing_records": 2441,
        "roc_auc": 0.9017
    }


# ==========================================
# Prediction Endpoint
# ==========================================

@app.post("/predict")
def predict(data: ShopperData):

    # ------------------------------------------
    # Convert request data to DataFrame
    # ------------------------------------------

    input_data = pd.DataFrame([data.model_dump()])


    # ==========================================
    # Feature Engineering
    # ==========================================

    # 1. Total Pages
    input_data["TotalPages"] = (
        input_data["Administrative"]
        + input_data["Informational"]
        + input_data["ProductRelated"]
    )


    # 2. Total Duration
    input_data["TotalDuration"] = (
        input_data["Administrative_Duration"]
        + input_data["Informational_Duration"]
        + input_data["ProductRelated_Duration"]
    )


    # 3. Average Product Duration
    input_data["AvgProductDuration"] = (
        input_data["ProductRelated_Duration"]
        / input_data["ProductRelated"].replace(0, 1)
    )


    # 4. Average Administrative Duration
    input_data["AvgAdministrativeDuration"] = (
        input_data["Administrative_Duration"]
        / input_data["Administrative"].replace(0, 1)
    )


    # 5. Average Informational Duration
    input_data["AvgInformationalDuration"] = (
        input_data["Informational_Duration"]
        / input_data["Informational"].replace(0, 1)
    )


    # ==========================================
    # Generate Prediction
    # ==========================================

    prediction = model.predict(input_data)[0]

    probability = model.predict_proba(input_data)[0][1]


    # ==========================================
    # Prepare Prediction Result
    # ==========================================

    if prediction:
        result = "Purchase"
        message = "The visitor is likely to make a purchase."
    else:
        result = "No Purchase"
        message = "The visitor is less likely to make a purchase."


    confidence_percentage = round(
        float(probability) * 100,
        2
    )


    # ==========================================
    # Return API Response
    # ==========================================

    return {
        "prediction": result,
        "probability": round(float(probability), 4),
        "confidence_percentage": confidence_percentage,
        "message": message
    }