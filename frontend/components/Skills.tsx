import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "/images/javascript.svg" },
  { name: "Typescript", icon: "/images/typescript.svg" },
  { name: "PHP", icon: "/images/php.svg" },
  { name: "HTML", icon: "/images/html5.svg" },
  { name: "CSS", icon: "/images/css3.svg" },
  { name: "JQuery", icon: "/images/jquery.svg" },
  { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
  { name: "Bootstrap", icon: "/images/bootstrap.svg" },
  { name: "CodeIgniter", icon: "/images/codeigniter.svg" },
  { name: "NextJS", icon: "/images/nextjs.svg" },
  { name: "Oracle", icon: "/images/oracle.svg" },
  { name: "MySQL", icon: "/images/mysql.svg" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "Git", icon: "/images/git.svg" },
  { name: "Github", icon: "/images/github.svg" },
  { name: "Gitlab", icon: "/images/gitlab.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
  { name: "VS Code", icon: "/images/vscode.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills and Tools" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="aspect-square relative group bg-slate-100 rounded-xl flex items-center justify-center p-4 overflow-hidden"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="w-2/3 h-2/3 object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/20 backdrop-filter backdrop-blur-md transition-opacity text-main font-redhat font-extrabold text-lg">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
