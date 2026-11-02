/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [data, setData] = useState({
    age: null,
    education: "",
    skills: [],
    interests: [],
    riskTolerance: "",
  });

  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addSkill = (skill) => {
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const removeSkill = (skill) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const addInterest = (interest) => {
    setData((prev) => ({
      ...prev,
      interests: [...prev.interests, interest],
    }));
  };

  const removeInterest = (interest) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.filter((i) => i !== interest),
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        updateData,
        addSkill,
        removeSkill,
        addInterest,
        removeInterest,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
};
