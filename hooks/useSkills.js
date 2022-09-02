import { useState } from "react";
import { SKILLS } from "../data";

const useSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const [addedSkills, setAddedSkills] = useState([]);

  const addSkill = (skill) => {
    if (addedSkills.find((addedSkill) => addedSkill.id === skill.id)) return;
    setAddedSkills([...addedSkills, skill]);
  };

  return {
    selectedSkill,
    setSelectedSkill,
    addedSkills,
    addSkill,
  };
};

export default useSkills;
