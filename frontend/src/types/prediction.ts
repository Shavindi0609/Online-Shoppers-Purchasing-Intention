// ==========================================
// Shopper Input Data
// ==========================================

export interface ShopperData {
  Administrative: number;
  Administrative_Duration: number;

  Informational: number;
  Informational_Duration: number;

  ProductRelated: number;
  ProductRelated_Duration: number;

  BounceRates: number;
  ExitRates: number;
  PageValues: number;
  SpecialDay: number;

  Month: string;

  OperatingSystems: number;
  Browser: number;
  Region: number;
  TrafficType: number;

  VisitorType: string;
  Weekend: boolean;
}


// ==========================================
// Prediction Response
// ==========================================

export interface PredictionResponse {
  prediction: string;
  probability: number;
  confidence_percentage: number;
  message: string;
}


// ==========================================
// Model Information
// ==========================================

export interface ModelInfo {
  model: string;
  problem_type: string;
  target: string;
  input_features: number;
  training_records: number;
  testing_records: number;
  roc_auc: number;
}