from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
import os

app = FastAPI(
    title="Online Shoppers Purchasing Intention API",
    description="ML API for predicting online purchase intention",
    version="1.0.0"
)

# Load trained pipeline
MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "models",
    "final_pipeline.pkl"
)

model = joblib.load(MODEL_PATH)


# Request data model
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


@app.get("/")
def root():
    return {
        "message": "Online Shoppers Purchasing Intention API is running"
    }


@app.post("/predict")
def predict(data: ShopperData):

    # Convert request data to DataFrame
    input_data = pd.DataFrame([data.model_dump()])

    # ==============================
    # Feature Engineering
    # ==============================

    input_data["TotalPages"] = (
        input_data["Administrative"]
        + input_data["Informational"]
        + input_data["ProductRelated"]
    )

    input_data["TotalDuration"] = (
        input_data["Administrative_Duration"]
        + input_data["Informational_Duration"]
        + input_data["ProductRelated_Duration"]
    )

    input_data["AvgProductDuration"] = (
        input_data["ProductRelated_Duration"]
        / input_data["ProductRelated"].replace(0, 1)
    )

    input_data["AvgAdministrativeDuration"] = (
        input_data["Administrative_Duration"]
        / input_data["Administrative"].replace(0, 1)
    )

    input_data["AvgInformationalDuration"] = (
        input_data["Informational_Duration"]
        / input_data["Informational"].replace(0, 1)
    )

    # ==============================
    # Prediction
    # ==============================

    prediction = model.predict(input_data)[0]

    probability = model.predict_proba(input_data)[0][1]

    result = "Purchase" if prediction else "No Purchase"

    return {
        "prediction": result,
        "probability": round(float(probability), 4)
    }