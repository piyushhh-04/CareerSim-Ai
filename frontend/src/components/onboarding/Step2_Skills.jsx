import { useOnboarding } from "../../context/OnboardingContext";
import StepCard from "./StepCard";
import TagInput from "./TagInput";

const skillExamples = [
  "Python",
  "Java",
  "React",
  "SQL",
  "Excel",
  "Leadership",
  "Communication",
  "Project Management",
];

export default function Step2_Skills() {
  const { data, addSkill, removeSkill } = useOnboarding();

  const isValid = data.skills.length > 0;

  return (
    <StepCard
      title="What are your current skills?"
      description="List the technical and soft skills you have. These will help personalize recommendations."
    >
      {/* Tag Input */}
      <TagInput
        tags={data.skills}
        onAddTag={addSkill}
        onRemoveTag={removeSkill}
        placeholder="Type a skill and press Enter..."
      />

      <div className="space-y-2">
        <p className="text-xs font-medium text-[#6b625b]">Examples:</p>
        <div className="flex flex-wrap gap-2">
          {skillExamples.map((skill) => (
            <button
              key={skill}
              onClick={() => {
                if (!data.skills.includes(skill)) {
                  addSkill(skill);
                }
              }}
              className="rounded-full border border-[#e7dccd] bg-[#f5efe7] px-3 py-1 text-xs text-[#4c443f] transition-colors hover:border-[#c7774b] hover:text-[#8b4e2a]"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>

      {!isValid && (
        <p className="text-xs text-[#b9544f]">At least one skill is required</p>
      )}

      {isValid && (
        <p className="text-xs text-[#6b625b]">{data.skills.length} skill(s) added</p>
      )}
    </StepCard>
  );
}
