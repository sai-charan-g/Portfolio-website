const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "AI / ML",
    items: ["Python", "Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Data & Database",
    items: ["MongoDB", "Data Preprocessing", "Model Evaluation"],
  },
  {
    title: "Tools",
    items: ["Git", "Vercel", "Jupyter Notebook"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Tools I actually use.</h2>
            <p className="section-copy">
              My toolkit is strongest around modern web development, with growing hands-on work in
              AI/ML and data-driven experimentation.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
