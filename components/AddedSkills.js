function AddedSkills({ skills, placeholder }) {
  return (
    <section className="flex space-x-4 mb-10 border-2 border-primary p-4">
      {!skills.length && <p>{placeholder}</p>}

      {skills.map((skill) => (
        <div className="text-primary border-r-2 last:border-0 pr-4 last:pr-0">
          <skill.Icon size={30} color={skill.color} />
        </div>
      ))}
    </section>
  );
}

export default AddedSkills;
