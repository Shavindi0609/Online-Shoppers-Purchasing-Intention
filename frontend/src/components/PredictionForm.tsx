import { useState } from "react";
import type { ShopperData } from "../types/prediction";

interface PredictionFormProps {
  onSubmit: (data: ShopperData) => void;
  loading: boolean;
}

const initialFormData: ShopperData = {
  Administrative: 0,
  Administrative_Duration: 0,
  Informational: 0,
  Informational_Duration: 0,
  ProductRelated: 0,
  ProductRelated_Duration: 0,
  BounceRates: 0,
  ExitRates: 0,
  PageValues: 0,
  SpecialDay: 0,
  Month: "May",
  OperatingSystems: 2,
  Browser: 2,
  Region: 1,
  TrafficType: 2,
  VisitorType: "Returning_Visitor",
  Weekend: false,
};

const PredictionForm = ({
  onSubmit,
  loading,
}: PredictionFormProps) => {

  const [formData, setFormData] =
    useState<ShopperData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
            ? Number(value)
            : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10";

  const labelClass =
    "mb-1.5 block text-xs font-bold text-slate-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 md:p-7">

      {/* Header */}
      <div className="mb-7">

        <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-emerald-700">
          Visitor Analysis
        </span>

        <h2 className="mt-2 text-2xl font-bold text-slate-800">
          Enter Visitor Information
        </h2>

        <p className="mt-1.5 text-sm leading-6 text-slate-500">
          Provide the visitor's browsing behavior and session
          information to generate a purchase prediction.
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        {/* Page Visit Information */}
        <div className="border-t border-slate-100 py-6">

          <h3 className="mb-5 text-base font-bold text-slate-800">
            Page Visit Information
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label
                htmlFor="Administrative"
                className={labelClass}
              >
                Administrative Pages
              </label>

              <input
                id="Administrative"
                name="Administrative"
                type="number"
                min="0"
                value={formData.Administrative}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="Administrative_Duration"
                className={labelClass}
              >
                Administrative Duration
              </label>

              <input
                id="Administrative_Duration"
                name="Administrative_Duration"
                type="number"
                min="0"
                step="0.01"
                value={formData.Administrative_Duration}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="Informational"
                className={labelClass}
              >
                Informational Pages
              </label>

              <input
                id="Informational"
                name="Informational"
                type="number"
                min="0"
                value={formData.Informational}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="Informational_Duration"
                className={labelClass}
              >
                Informational Duration
              </label>

              <input
                id="Informational_Duration"
                name="Informational_Duration"
                type="number"
                min="0"
                step="0.01"
                value={formData.Informational_Duration}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="ProductRelated"
                className={labelClass}
              >
                Product Related Pages
              </label>

              <input
                id="ProductRelated"
                name="ProductRelated"
                type="number"
                min="0"
                value={formData.ProductRelated}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="ProductRelated_Duration"
                className={labelClass}
              >
                Product Related Duration
              </label>

              <input
                id="ProductRelated_Duration"
                name="ProductRelated_Duration"
                type="number"
                min="0"
                step="0.01"
                value={formData.ProductRelated_Duration}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

          </div>
        </div>

        {/* Browsing Behaviour */}
        <div className="border-t border-slate-100 py-6">

          <h3 className="mb-5 text-base font-bold text-slate-800">
            Browsing Behaviour
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label
                htmlFor="BounceRates"
                className={labelClass}
              >
                Bounce Rate
              </label>

              <input
                id="BounceRates"
                name="BounceRates"
                type="number"
                min="0"
                max="1"
                step="0.0001"
                value={formData.BounceRates}
                onChange={handleChange}
                className={inputClass}
              />

              <small className="mt-1 block text-[11px] text-slate-400">
                Value between 0 and 1
              </small>
            </div>

            <div>
              <label
                htmlFor="ExitRates"
                className={labelClass}
              >
                Exit Rate
              </label>

              <input
                id="ExitRates"
                name="ExitRates"
                type="number"
                min="0"
                max="1"
                step="0.0001"
                value={formData.ExitRates}
                onChange={handleChange}
                className={inputClass}
              />

              <small className="mt-1 block text-[11px] text-slate-400">
                Value between 0 and 1
              </small>
            </div>

            <div>
              <label
                htmlFor="PageValues"
                className={labelClass}
              >
                Page Value
              </label>

              <input
                id="PageValues"
                name="PageValues"
                type="number"
                min="0"
                step="0.01"
                value={formData.PageValues}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="SpecialDay"
                className={labelClass}
              >
                Special Day
              </label>

              <input
                id="SpecialDay"
                name="SpecialDay"
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={formData.SpecialDay}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

          </div>
        </div>

        {/* Session Information */}
        <div className="border-t border-slate-100 py-6">

          <h3 className="mb-5 text-base font-bold text-slate-800">
            Session Information
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label
                htmlFor="Month"
                className={labelClass}
              >
                Month
              </label>

              <select
                id="Month"
                name="Month"
                value={formData.Month}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="VisitorType"
                className={labelClass}
              >
                Visitor Type
              </label>

              <select
                id="VisitorType"
                name="VisitorType"
                value={formData.VisitorType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="Returning_Visitor">
                  Returning Visitor
                </option>

                <option value="New_Visitor">
                  New Visitor
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="OperatingSystems"
                className={labelClass}
              >
                Operating System
              </label>

              <input
                id="OperatingSystems"
                name="OperatingSystems"
                type="number"
                min="1"
                value={formData.OperatingSystems}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="Browser"
                className={labelClass}
              >
                Browser
              </label>

              <input
                id="Browser"
                name="Browser"
                type="number"
                min="1"
                value={formData.Browser}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="Region"
                className={labelClass}
              >
                Region
              </label>

              <input
                id="Region"
                name="Region"
                type="number"
                min="1"
                value={formData.Region}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="TrafficType"
                className={labelClass}
              >
                Traffic Type
              </label>

              <input
                id="TrafficType"
                name="TrafficType"
                type="number"
                min="1"
                value={formData.TrafficType}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

          </div>

          {/* Weekend */}
          <label className="mt-5 flex cursor-pointer items-center gap-3">

            <input
              id="Weekend"
              name="Weekend"
              type="checkbox"
              checked={formData.Weekend}
              onChange={handleChange}
              className="h-4 w-4 accent-emerald-700"
            />

            <span className="text-sm text-slate-600">
              Visitor session occurred on a weekend
            </span>

          </label>

        </div>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-800 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Predicting...
              </>
            ) : (
              <>
                Predict Purchase
                <span>→</span>
              </>
            )}
          </button>

        </div>

      </form>

    </div>
  );
};

export default PredictionForm;