import Button from "./Button";
import { useState } from "react";
import AddProject from "./AddProject";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Projects() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, { id: projects.length, ...project }]);
    setOpen(false);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <section>
      {projects.map((project) => (
        <div key={project.id} className="mb-10 shadow-lg">
          <div className="h-60">
            <img
              className="w-full block h-full object-cover object-center"
              src={project.image}
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex space-x-4 mt-5">
              {project.skills.map((skill) => (
                <div key={skill.id}>
                  <skill.Icon size={40} color={skill.color} />
                </div>
              ))}
            </div>
            <div className="flex space-x-4 mt-5">
              <a href={project.previewLink} title="Live URL">
                <BiLinkExternal size={25} />
              </a>
              <a href={project.githubLink} title="Github Repo URL">
                <BsGithub size={25} />
              </a>
            </div>

            <div className="flex space-x-4 items-center mt-5">
              <Button onClick={removeProject.bind(this, project.id)}>
                Remove
              </Button>
              <span>OR</span>
              <Button>Edit</Button>
            </div>
          </div>
        </div>
      ))}

      <AddProject
        open={open}
        onClose={() => setOpen(false)}
        onAdd={addProject}
      />

      <Button className="mx-auto" onClick={() => setOpen(true)}>
        Add a Project
      </Button>
    </section>
  );
}

export default Projects;
