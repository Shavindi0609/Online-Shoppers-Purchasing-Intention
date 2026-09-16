import {
  useEffect,
  useRef,
  useState,
} from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";
import ModelInfo from "../components/ModelInfo";
import ModelComparison from "../components/ModelComparison";
import Footer from "../components/Footer";

import { predictPurchase } from "../services/predictionService";

import type {
  ShopperData,
  PredictionResponse,
} from "../types/prediction";


const PredictionPage = () => {

  const [predictionResult, setPredictionResult] =
    useState<PredictionResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);


  // Prediction result reference
  const resultRef =
    useRef<HTMLDivElement>(null);


  // Auto scroll to result
  useEffect(() => {

    if (predictionResult || error) {

      setTimeout(() => {

        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }, 100);

    }

  }, [predictionResult, error]);


  // Handle prediction
  const handlePrediction = async (
    data: ShopperData
  ) => {

    try {

      setLoading(true);
      setError(null);
      setPredictionResult(null);

      const result =
        await predictPurchase(data);

      setPredictionResult(result);

    } catch (err) {

      console.error(
        "Prediction request failed:",
        err
      );

      setError(
        "Unable to connect to the prediction server. Please make sure the FastAPI backend is running."
      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <HeroSection />

      <main>

        {/* Prediction Section */}
        <section
          id="prediction"
          className="bg-slate-50 px-0 py-20 md:py-24"
        >

          <div className="mx-auto w-[92%] max-w-[1180px]">

            <div className="mb-11 max-w-2xl">

              <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-emerald-700">
                AI Prediction
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
                Predict Purchase Intention
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
                Enter the visitor's session information below
                to find out whether the visitor is likely to
                make a purchase.
              </p>

            </div>

            {/* Form + Result */}
            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1.35fr_0.85fr]">

              <PredictionForm
                onSubmit={handlePrediction}
                loading={loading}
              />

              <div
                ref={resultRef}
                className="scroll-mt-24"
              >

                <PredictionResult
                  result={predictionResult}
                  loading={loading}
                  error={error}
                />

              </div>

            </div>

          </div>

        </section>


        {/* Model Info */}
        <ModelInfo />


        {/* Model Comparison */}
        <ModelComparison />


        {/* About */}
        <section
          id="about"
          className="bg-white px-0 py-20 md:py-24"
        >

          <div className="mx-auto w-[92%] max-w-[1180px]">

            <div className="max-w-4xl">

              <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-emerald-700">
                About The Project
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
                Online Shopper Purchasing Intention
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">
                This project uses machine learning to predict
                whether an online visitor is likely to complete
                a purchase based on their browsing behaviour
                and session information.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                The system follows a full-stack machine learning
                architecture where the React frontend communicates
                with a FastAPI REST backend. The backend processes
                the input data and sends it through the trained
                Logistic Regression model to generate the
                prediction.
              </p>


              {/* Features */}
              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">

                <AboutFeature
                  number="01"
                  title="Data Analysis"
                  description="Exploratory data analysis was performed to understand the dataset and identify important patterns."
                />

                <AboutFeature
                  number="02"
                  title="Feature Engineering"
                  description="Additional meaningful features were created from visitor browsing and duration information."
                />

                <AboutFeature
                  number="03"
                  title="Machine Learning"
                  description="Multiple classification algorithms were evaluated and Logistic Regression was selected for deployment."
                />

                <AboutFeature
                  number="04"
                  title="Full-Stack Integration"
                  description="The trained model is integrated into a web application through a FastAPI REST API."
                />

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};


interface AboutFeatureProps {
  number: string;
  title: string;
  description: string;
}

const AboutFeature = ({
  number,
  title,
  description,
}: AboutFeatureProps) => {

  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">

      <span className="text-xs font-extrabold text-emerald-700">
        {number}
      </span>

      <div>

        <h3 className="text-sm font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-6 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
};


export default PredictionPage;