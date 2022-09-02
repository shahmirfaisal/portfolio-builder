import { Listbox } from "@headlessui/react";
import { SKILLS } from "../data";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function SkillsSelect({ onAdd, onChange, currentSkill }) {
  return (
    <Listbox value={currentSkill} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button className="border-2 w-full p-2 border-primary rounded-lg shadow-md flex items-center justify-between">
            <span>{currentSkill.name}</span>

            {open ? (
              <MdKeyboardArrowUp size={22} />
            ) : (
              <MdKeyboardArrowDown size={22} />
            )}
          </Listbox.Button>

          <Listbox.Options className="mt-5 cursor-pointer border-2 border-primary p-2 rounded-lg shadow-md">
            {SKILLS.map((skill) => (
              <Listbox.Option
                onClick={onAdd.bind(this, skill)}
                className="hover:bg-primary hover:text-white py-2 px-3 rounded-lg flex items-center space-x-2 mb-3 last:mb-0"
                key={skill.id}
                value={skill}
              >
                <skill.Icon size={22} />
                <span>{skill.name}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
}

export default SkillsSelect;
