interface ModelResult {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc: number;
  selected?: boolean;
}

const modelResults: ModelResult[] = [
  {
    name: "Logistic Regression",
    accuracy: 88.69,
    precision: 76.77,
    recall: 39.79,
    f1Score: 52.41,
    rocAuc: 90.17,
    selected: true,
  },
  {
    name: "Decision Tree",
    accuracy: 85.74,
    precision: 54.25,
    recall: 56.81,
    f1Score: 55.50,
    rocAuc: 73.96,
  },
  {
    name: "Random Forest",
    accuracy: 90.54,
    precision: 76.49,
    recall: 57.07,
    f1Score: 65.37,
    rocAuc: 92.34,
  },
];

const ModelComparison = () => {
  return (
    <section
      id="comparison"
      className="bg-slate-50 px-0 py-20 md:py-24"
    >

      <div className="mx-auto w-[92%] max-w-[1180px]">

        <div className="mb-11 max-w-2xl">

          <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-emerald-700">
            Model Evaluation
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Model Comparison
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
            Three machine learning algorithms were evaluated
            using the same training and testing data.
          </p>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">

          <table className="w-full min-w-[750px] border-collapse">

            <thead>
              <tr className="bg-slate-50">

                <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  Model
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  Accuracy
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  Precision
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  Recall
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  F1-Score
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                  ROC-AUC
                </th>

              </tr>
            </thead>

            <tbody>

              {modelResults.map((model) => (

                <tr
                  key={model.name}
                  className={`border-t border-slate-100 transition hover:bg-slate-50 ${
                    model.selected
                      ? "bg-emerald-50/60"
                      : ""
                  }`}
                >

                  <td className="px-5 py-5">

                    <div className="flex items-center gap-2.5">

                      <strong className="text-sm text-slate-800">
                        {model.name}
                      </strong>

                      {model.selected && (
                        <span className="rounded-md bg-emerald-100 px-2 py-1 text-[9px] font-extrabold uppercase text-emerald-700">
                          Selected
                        </span>
                      )}

                    </div>

                  </td>

                  <td className="px-5 py-5 text-sm text-slate-600">
                    {model.accuracy.toFixed(2)}%
                  </td>

                  <td className="px-5 py-5 text-sm text-slate-600">
                    {model.precision.toFixed(2)}%
                  </td>

                  <td className="px-5 py-5 text-sm text-slate-600">
                    {model.recall.toFixed(2)}%
                  </td>

                  <td className="px-5 py-5 text-sm text-slate-600">
                    {model.f1Score.toFixed(2)}%
                  </td>

                  <td className="px-5 py-5 text-sm font-bold text-emerald-700">
                    {model.rocAuc.toFixed(2)}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Explanation */}
        <div className="mt-6 flex gap-4 rounded-xl border border-slate-200 bg-white p-5">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
            ✓
          </div>

          <div>

            <h3 className="text-base font-bold text-slate-800">
              Final Model: Logistic Regression
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Random Forest achieved higher performance among
              the evaluated models. However, Logistic Regression
              was selected as the final deployed model because
              it provides simplicity, interpretability,
              computational efficiency, and is well suited for
              binary classification.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ModelComparison;