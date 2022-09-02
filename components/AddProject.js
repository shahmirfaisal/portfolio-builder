import Input from "./Input";
import ImageUploader from "./ImageUploader";
import useUploadImage from "../hooks/useUploadImage";
import useSkills from "../hooks/useSkills";
import SkillsSelect from "./SkillsSelect";
import AddedSkills from "./AddedSkills";
import { Dialog } from "@headlessui/react";
import Button from "./Button";
import { useState } from "react";

const AddProject = ({ open, onClose, onAdd }) => {
  const { image, uploadImage } = useUploadImage();
  const { addSkill, addedSkills, selectedSkill, setSelectedSkill } =
    useSkills();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const changeInput = (setter) => (e) => setter(e.target.value);

  const addProject = () => {
    onAdd({
      image,
      title,
      description,
      githubLink,
      previewLink,
      skills: addedSkills,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" />

      <div className="fixed flex items-center justify-center inset-0">
        <Dialog.Panel className="bg-white p-10 max-w-2xl w-full overflow-y-scroll max-h-[90%]">
          <Dialog.Title className="text-2xl font-bold text-center mb-5">
            Add a Project
          </Dialog.Title>

          <section className="space-y-6">
            <ImageUploader src={image} onUpload={uploadImage} />

            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={changeInput(setTitle)}
            />

            <Input
              className="h-32"
              type="textarea"
              placeholder="Description"
              value={description}
              onChange={changeInput(setDescription)}
            />

            <div>
              <label className="text-lg font-bold mb-3 inline-block">
                Tech Stack
              </label>
              <AddedSkills
                skills={addedSkills}
                placeholder="No Technologies Added!"
              />
            </div>

            <div>
              <label className="text-lg font-bold mb-3 inline-block">
                Add Technologies
              </label>
              <SkillsSelect
                currentSkill={selectedSkill}
                onAdd={addSkill}
                onChange={setSelectedSkill}
              />
            </div>

            <Input
              type="url"
              placeholder="Preview Link"
              value={previewLink}
              onChange={changeInput(setPreviewLink)}
            />
            <Input
              type="url"
              placeholder="Github Link"
              value={githubLink}
              onChange={changeInput(setGithubLink)}
            />

            <Button onClick={addProject} className="w-full">
              ADD
            </Button>
          </section>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddProject;
