import Button from "./Button";
import { useState } from "react";
import { SKILLS } from "../data";
import SkillsSelect from "./SkillsSelect";
import useSkills from "../hooks/useSkills";
import AddedSkills from "./AddedSkills";

function Skills() {
  const { selectedSkill, setSelectedSkill, addSkill, addedSkills } =
    useSkills();

  return (
    <form className="space-y-5">
      <div>
        <label className="font-semibold text-lg inline-block mb-3">
          Your Skills
        </label>
        <AddedSkills skills={addedSkills} placeholder="No Skills Added!" />
      </div>

      <div>
        <label className="font-semibold text-lg inline-block mb-3">
          Add Skills
        </label>
        <SkillsSelect
          onAdd={addSkill}
          currentSkill={selectedSkill}
          onChange={setSelectedSkill}
        />
      </div>

      <Button className="w-full">Save this section</Button>
    </form>
  );
}

export default Skills;
