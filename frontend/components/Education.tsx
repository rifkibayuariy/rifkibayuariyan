import SectionTitle from "@/components/ui/SectionTitle";

const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1 - Teknik Informatika",
  },
  {
    id: 2,
    period: "2018 - 2022",
    institution: "SMK Negeri 2 Klaten",
    major: "Sistem Informasi Jaringan dan Aplikasi",
  },
  {
    id: 3,
    period: "2015 - 2018",
    institution: "SMP Negeri 1 Manisrenggo",
    major: "Reguler",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Education" />
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-full">
              {educationHistory.map((edu) => {
                return (
                  <div
                    className="flex flex-row items-center lg:p-6 lg:border lg:border-secondary lg:rounded-xl"
                    key={edu.id}
                  >
                    <div className="pr-8 h-full flex items-center lg:hidden">
                      <div className="h-3 w-3 rounded-full bg-main"></div>
                    </div>
                    <div>
                      <div className="w-full flex flex-col">
                        <p className="font-semibold text-xs font-jakarta text-main lg:text-white lg:px-2 lg:py-1 lg:bg-main lg:w-fit lg:font-extrabold lg:rounded-md">
                          {edu.period}
                        </p>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-redhat text-main mt-1 lg:mt-2">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                          {edu.major}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
