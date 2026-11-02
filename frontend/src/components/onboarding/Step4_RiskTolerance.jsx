import { useOnboarding } from "../../context/OnboardingContext";
import StepCard from "./StepCard";
import RiskSelector from "./RiskSelector";

export default function Step4_RiskTolerance() {
  const { data, updateData } = useOnboarding();

  const isValid = data.riskTolerance !== "";

  return (
    <StepCard
      title="What's your risk tolerance?"
      description="This helps us simulate career paths that match your comfort level"
    >
      <RiskSelector
        selected={data.riskTolerance}
        onChange={(value) => updateData("riskTolerance", value)}
      />

      {!isValid && (
        <p className="text-xs text-[#b9544f]">Please select a risk tolerance level</p>
      )}
    </StepCard>
  );
}
