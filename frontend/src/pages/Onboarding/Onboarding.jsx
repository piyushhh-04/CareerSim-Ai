import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingProvider, useOnboarding } from "../../context/OnboardingContext";
import ProgressBar from "../../components/onboarding/ProgressBar";
import Step1_AgeEducation from "../../components/onboarding/Step1_AgeEducation";
import Step2_Skills from "../../components/onboarding/Step2_Skills";
import Step3_Interests from "../../components/onboarding/Step3_Interests";
import Step4_RiskTolerance from "../../components/onboarding/Step4_RiskTolerance";
import Step5_Review from "../../components/onboarding/Step5_Review";

const TOTAL_STEPS = 5;

function OnboardingContent() {
  const navigate = useNavigate();
  const { data } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(1);

  const isStep1Valid = () => data.age && data.education && data.age >= 15 && data.age <= 70;
  const isStep2Valid = () => data.skills.length > 0;
  const isStep3Valid = () => data.interests.length > 0;
  const isStep4Valid = () => data.riskTolerance !== "";
  const isStep5Valid = () => true;

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return isStep1Valid();
      case 2:
        return isStep2Valid();
      case 3:
        return isStep3Valid();
      case 4:
        return isStep4Valid();
      case 5:
        return isStep5Valid();
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        handleComplete();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleComplete = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("careersim.onboardingData", JSON.stringify(data));
    }
    navigate("/careers");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_AgeEducation />;
      case 2:
        return <Step2_Skills />;
      case 3:
        return <Step3_Interests />;
      case 4:
        return <Step4_RiskTolerance />;
      case 5:
        return <Step5_Review />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-6 py-12 text-[#1f1b18]">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12">
          <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        </div>

        <AnimatePresence mode="wait">
          <div key={currentStep} className="flex justify-center">
            {renderStep()}
          </div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-between gap-4"
        >
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="rounded-lg border border-[#d9c9bb] bg-[#fffaf4] px-6 py-3 font-medium text-[#2b241f] transition-colors hover:border-[#c7774b] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!validateCurrentStep()}
            className={`rounded-lg px-8 py-3 font-medium transition-all ${
              validateCurrentStep()
                ? "bg-[#2d241e] text-[#f8f1ea] hover:bg-[#3b2e28]"
                : "cursor-not-allowed bg-[#e5d9ca] text-[#7b6b60]"
            }`}
          >
            {currentStep === TOTAL_STEPS ? "Generate Simulation" : "Next"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function Onboarding() {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  );
}
