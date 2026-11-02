import { useOnboarding } from "../../context/OnboardingContext";
import StepCard from "./StepCard";
import TagInput from "./TagInput";

const interestExamples = [
  "AI",
  "Finance",
  "Healthcare",
  "Gaming",
  "Teaching",
  "Research",
  "Entrepreneurship",
  "Sustainability",
];

export default function Step3_Interests() {
  const { data, addInterest, removeInterest } = useOnboarding();

  const isValid = data.interests.length > 0;

  return (
    <StepCard
      title="What are your career interests?"
      description="Tell us what excites you professionally. This helps us recommend relevant paths."
    >
      {/* Tag Input */}
      <TagInput
        tags={data.interests}
        onAddTag={addInterest}
        onRemoveTag={removeInterest}
        placeholder="Type an interest and press Enter..."
      />

      <div className="space-y-2">
        <p className="text-xs font-medium text-[#6b625b]">Examples:</p>
        <div className="flex flex-wrap gap-2">
          {interestExamples.map((interest) => (
            <button
              key={interest}
              onClick={() => {
                if (!data.interests.includes(interest)) {
                  addInterest(interest);
                }
              }}
              className="rounded-full border border-[#e7dccd] bg-[#f5efe7] px-3 py-1 text-xs text-[#4c443f] transition-colors hover:border-[#c7774b] hover:text-[#8b4e2a]"
            >
              + {interest}
            </button>
          ))}
        </div>
      </div>

      {!isValid && (
        <p className="text-xs text-[#b9544f]">At least one interest is required</p>
      )}

      {isValid && (
        <p className="text-xs text-[#6b625b]">{data.interests.length} interest(s) added</p>
      )}
    </StepCard>
  );
}
