import SectionTitle from "@/components/ui/SectionTitle";

const skills = [
  { name: "Vue.js", level: "Mahir" },
  { name: "JavaScript", level: "Mahir" },
  { name: "Tailwind CSS", level: "Mahir" },
  { name: "Node.js", level: "Menengah" },
  { name: "Express.js", level: "Menengah" },
  { name: "PostgreSQL", level: "Menengah" },
  { name: "Git & GitHub", level: "Mahir" },
  { name: "HTML5 & CSS3", level: "Mahir" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills and Tools" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => {
            return (
              <div
                key={skill.name}
                className="bg-white
                    p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2
                    transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-gray-500 mt-2">{skill.level}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
