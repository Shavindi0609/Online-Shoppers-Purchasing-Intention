import { useEffect, useState } from "react";

import { getModelInfo } from "../services/predictionService";

import type {
  ModelInfo as ModelInfoType,
} from "../types/prediction";

const ModelInfo = () => {

  const [modelInfo, setModelInfo] =
    useState<ModelInfoType | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    const loadModelInfo = async () => {

      try {

        setLoading(true);
        setError(null);

        const data = await getModelInfo();

        setModelInfo(data);

      } catch (err) {

        console.error(
          "Failed to load model information:",
          err
        );

        setError(
          "Unable to load model information. Please make sure the backend is running."
        );

      } finally {

        setLoading(false);

      }
    };

    loadModelInfo();

  }, []);

  return (
    <section
      id="model"
      className="bg-white px-0 py-20 md:py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1180px]">

        {/* Heading */}
        <div className="mb-11 max-w-2xl">

          <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-emerald-700">
            Machine Learning Model
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Model Information
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
            Our prediction system uses a trained machine
            learning model to analyze visitor behaviour and
            estimate purchase intention.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-40 items-center justify-center gap-3 text-sm text-slate-500">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-700" />
            Loading model information...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Information */}
        {!loading && !error && modelInfo && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <InfoCard
                label="Algorithm"
                value={modelInfo.model}
                icon="ML"
              />

              <InfoCard
                label="Problem Type"
                value={modelInfo.problem_type}
                icon="AI"
              />

              <InfoCard
                label="Target Variable"
                value={modelInfo.target}
                icon="Y"
              />

              <InfoCard
                label="Input Features"
                value={String(modelInfo.input_features)}
                icon="22"
              />

              <InfoCard
                label="Training Records"
                value={modelInfo.training_records.toLocaleString()}
                icon="TR"
              />

              <InfoCard
                label="Testing Records"
                value={modelInfo.testing_records.toLocaleString()}
                icon="TS"
              />

              <InfoCard
                label="ROC-AUC Score"
                value={`${(modelInfo.roc_auc * 100).toFixed(2)}%`}
                icon="AUC"
                highlight
              />

            </div>

            {/* Explanation */}
            <div className="mt-7 flex gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg">
                💡
              </div>

              <div>

                <h3 className="text-base font-bold text-slate-800">
                  Why Logistic Regression?
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  We evaluated Logistic Regression, Decision
                  Tree, and Random Forest models. Although
                  Random Forest achieved better performance,
                  Logistic Regression was selected as the final
                  model because it is simple, interpretable,
                  computationally efficient, and well suited
                  for binary classification.
                </p>

              </div>

            </div>
          </>
        )}

      </div>

    </section>
  );
};


interface InfoCardProps {
  label: string;
  value: string;
  icon: string;
  highlight?: boolean;
}

const InfoCard = ({
  label,
  value,
  icon,
  highlight = false,
}: InfoCardProps) => {

  return (
    <div
      className={`flex min-h-[105px] items-center gap-3 rounded-xl border p-5 ${
        highlight
          ? "border-emerald-800 bg-emerald-800"
          : "border-slate-200 bg-slate-50"
      }`}
    >

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
          highlight
            ? "bg-white/15 text-white"
            : "bg-emerald-100 text-emerald-700"
        }`}
      >
        {icon}
      </div>

      <div>

        <span
          className={`block text-[11px] ${
            highlight
              ? "text-emerald-100"
              : "text-slate-500"
          }`}
        >
          {label}
        </span>

        <h3
          className={`mt-0.5 text-sm font-bold ${
            highlight
              ? "text-white"
              : "text-slate-800"
          }`}
        >
          {value}
        </h3>

      </div>

    </div>
  );
};

export default ModelInfo;