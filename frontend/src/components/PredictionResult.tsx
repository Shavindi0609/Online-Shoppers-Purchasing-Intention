import type { PredictionResponse } from "../types/prediction";

interface PredictionResultProps {
  result: PredictionResponse | null;
  loading: boolean;
  error: string | null;
}

const PredictionResult = ({
  result,
  loading,
  error,
}: PredictionResultProps) => {

  if (loading) {
    return (
      <div className="flex min-h-[390px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-lg shadow-slate-900/5">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <span className="h-6 w-6 animate-spin rounded-full border-3 border-emerald-200 border-t-emerald-700" />
        </div>

        <h2 className="text-xl font-bold text-slate-800">
          Analyzing Visitor...
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          Our machine learning model is analyzing the visitor
          behaviour and predicting the purchase intention.
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[390px] flex-col items-center justify-center rounded-2xl border border-red-100 bg-white p-7 text-center shadow-lg shadow-slate-900/5">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-xl font-bold text-red-600">
          !
        </div>

        <h2 className="text-xl font-bold text-slate-800">
          Prediction Failed
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {error}
        </p>

      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex min-h-[390px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-lg shadow-slate-900/5">

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-xl font-bold text-emerald-700">
          ?
        </div>

        <h2 className="text-xl font-bold text-slate-800">
          Prediction Result
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          Enter the visitor information and click
          <strong> Predict Purchase </strong>
          to see the result.
        </p>

      </div>
    );
  }

  const isPurchase = result.prediction === "Purchase";

  return (
    <div
      className={`rounded-2xl border bg-white p-7 shadow-lg shadow-slate-900/5 ${
        isPurchase
          ? "border-emerald-200"
          : "border-red-100"
      }`}
    >

      {/* Header */}
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-emerald-700">
          Prediction Result
        </span>

        <div
          className={`flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-extrabold ${
            isPurchase
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
          {result.prediction}
        </div>

      </div>

      {/* Main Result */}
      <div className="mb-8 flex items-center gap-4">

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-extrabold ${
            isPurchase
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isPurchase ? "✓" : "×"}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            {isPurchase
              ? "Purchase Likely"
              : "No Purchase Likely"}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {result.message}
          </p>
        </div>

      </div>

      {/* Metrics */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

          <span className="block text-xs text-slate-500">
            Purchase Probability
          </span>

          <strong className="mt-1 block text-2xl font-bold text-emerald-700">
            {(result.probability * 100).toFixed(2)}%
          </strong>

        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

          <span className="block text-xs text-slate-500">
            Model Confidence
          </span>

          <strong className="mt-1 block text-2xl font-bold text-emerald-700">
            {result.confidence_percentage.toFixed(2)}%
          </strong>

        </div>

      </div>

      {/* Probability */}
      <div className="mb-6">

        <div className="mb-2 flex justify-between text-xs font-semibold text-slate-500">

          <span>
            Purchase Probability
          </span>

          <span>
            {(result.probability * 100).toFixed(2)}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">

          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-700"
            style={{
              width: `${result.probability * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Note */}
      <div className="flex gap-2 rounded-lg bg-slate-50 p-3 text-slate-500">

        <span>ⓘ</span>

        <p className="text-xs leading-5">
          This prediction is generated by the trained
          Logistic Regression machine learning model.
        </p>

      </div>

    </div>
  );
};

export default PredictionResult;