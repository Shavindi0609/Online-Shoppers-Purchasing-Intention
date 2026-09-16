import axios from "axios";

import type {
  ShopperData,
  PredictionResponse,
  ModelInfo,
} from "../types/prediction";


// ==========================================
// API Configuration
// ==========================================

const API_URL = "http://127.0.0.1:8000";


// ==========================================
// Prediction API
// ==========================================

export const predictPurchase = async (
  data: ShopperData
): Promise<PredictionResponse> => {

  const response = await axios.post<PredictionResponse>(
    `${API_URL}/predict`,
    data
  );

  return response.data;
};


// ==========================================
// Model Information API
// ==========================================

export const getModelInfo = async (): Promise<ModelInfo> => {

  const response = await axios.get<ModelInfo>(
    `${API_URL}/model-info`
  );

  return response.data;
};


// ==========================================
// Backend Health API
// ==========================================

export const checkHealth = async () => {

  const response = await axios.get(
    `${API_URL}/health`
  );

  return response.data;
};