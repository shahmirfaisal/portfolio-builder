import Button from "./Button";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const skills = [
  {
    id: 1,
    name: "HTML",
    Icon: AiFillHtml5,
  },
  {
    id: 2,
    name: "CSS",
    Icon: IoLogoCss3,
  },
  {
    id: 3,
    name: "Javascript",
    Icon: IoLogoJavascript,
  },
];

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [addedSkills, setAddedSkills] = useState([
    // {
    //   id: 2,
    //   name: "CSS",
    //   Icon: IoLogoCss3,
    // },
    // {
    //   id: 3,
    //   name: "Javascript",
    //   Icon: IoLogoJavascript,
    // },
  ]);

  const addSkill = (skill) => {
    if (addedSkills.find((addedSkill) => addedSkill.id === skill.id)) return;
    setAddedSkills([...addedSkills, skill]);
  };

  return (
    <form className="space-y-5">
      <div>
        <label className="font-semibold text-lg inline-block mb-3">
          Your Skills
        </label>
        <section className="flex space-x-4 mb-10 border-2 border-primary p-4">
          {!addedSkills.length && <p>No skills added!</p>}

          {addedSkills.map((skill) => (
            <div className="text-primary border-r-2 last:border-0 pr-4 last:pr-0">
              <skill.Icon size={30} />
            </div>
          ))}
        </section>
      </div>

      <div>
        <label className="font-semibold text-lg inline-block mb-3">
          Add Skills
        </label>
        <Listbox value={selectedSkill} onChange={setSelectedSkill}>
          {({ open }) => (
            <>
              <Listbox.Button className="border-2 w-full p-2 border-primary rounded-lg shadow-md flex items-center justify-between">
                <span>{selectedSkill.name}</span>

                {open ? (
                  <MdKeyboardArrowUp size={22} />
                ) : (
                  <MdKeyboardArrowDown size={22} />
                )}
              </Listbox.Button>

              <Listbox.Options className="cursor-pointer border-2 border-primary p-2 rounded-lg shadow-md">
                {skills.map((skill) => (
                  <Listbox.Option
                    onClick={addSkill.bind(this, skill)}
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
      </div>

      <Button className="w-full">Save this section</Button>
    </form>
  );
}

export default Skills;
