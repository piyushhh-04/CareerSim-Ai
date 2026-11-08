import { useOnboarding } from "../../context/OnboardingContext";
import StepCard from "./StepCard";

const educationOptions = [
  "High School",
  "Diploma",
  "Bachelor's",
  "Master's",
  "PhD",
  "Other",
];

export default function Step1_AgeEducation() {
  const { data, updateData } = useOnboarding();

  const isValid = data.age && data.education;

  return (
    <StepCard
      title="Tell us about yourself"
      description="We'll use this to personalize your career simulation"
    >
      {/* Age Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#352f2a]">
          Age <span className="text-[#b9544f]">*</span>
        </label>
        <input
          type="number"
          min="16"
          max="70"
          value={data.age || ""}
          onChange={(e) => updateData("age", e.target.value ? Number(e.target.value) : null)}
          placeholder="Enter your age (16-70)"
          className="w-full rounded-xl border border-[#e7dccd] bg-[#f5efe7] px-4 py-3 text-[#1f1b18] placeholder-[#7b6b60] outline-none transition-colors focus:border-[#c7774b]"
        />
        {data.age && (data.age < 16 || data.age > 70) && (
          <p className="text-xs text-[#b9544f]">Age must be between 16 and 70</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#352f2a]">
          Education Level <span className="text-[#b9544f]">*</span>
        </label>
        <select
          value={data.education}
          onChange={(e) => updateData("education", e.target.value)}
          className="w-full rounded-xl border border-[#e7dccd] bg-[#f5efe7] px-4 py-3 text-[#1f1b18] outline-none transition-colors focus:border-[#c7774b]"
        >
          <option value="">Select your education level</option>
          {educationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {!isValid && (
        <p className="text-xs text-[#6b625b]">
          Complete this step to proceed
        </p>
      )}
    </StepCard>
  );
}
