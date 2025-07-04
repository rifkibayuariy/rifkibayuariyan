import SectionTitle from "@/components/ui/SectionTitle";
// import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Website Toko Online",
    image: "https://via.placeholder.com/500x300?text=Proyek+1",
    description: "Platform e-commerce dengan fitur keranjang belanja.",
    tech: ["Vue.js", "Express.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Aplikasi Manajemen Tugas",
    image: "https://via.placeholder.com/500x300?text=Proyek+2",
    description: "Aplikasi untuk melacak progres tugas harian.",
    tech: ["React", "Firebase"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyek" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Proyek Unggulan" />
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => {
            return (
              <div key={project.title}>
                {/* <Image
                  src={project.image}
                  alt="Gambar Proyek"
                  className="w-full
h-56 object-cover"
                /> */}
                <img
                  src="project.image"
                  alt="Gambar Proyek"
                  className="w-full
h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.tech.map((t) => {
                      return (
                        <span
                          key={t}
                          className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5
                            py-0.5 rounded-full"
                        ></span>
                      );
                    })}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Lihat Detail &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
