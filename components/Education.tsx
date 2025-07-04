import SectionTitle from "@/components/ui/SectionTitle";

const educationHistory = [
  {
    id: 1,
    period: "2022 - Sekarang",
    institution: "Universitas Gadjah Mada",
    major: "S1 - Teknik Informatika",
  },
  {
    id: 2,
    period: "2019 - 2022",
    institution: "SMA Negeri 1 Teladan Yogyakarta",
    major: "MIPA",
  },
];

export default function Education() {
  return (
    <section id="pendidikan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Riwayat Pendidikan" />
        <div className="relative">
          <div
            className="absolute h-full border-r-2 border-gray-300"
            style={{ left: "50%" }}
          >
            {educationHistory.map((edu, index) => {
              if (index % 2 == 0) {
                return (
                  <div className="w-full flex" key={edu.id}>
                    <div className="w-1/2 pr-8 text-right">
                      <p
                        className="font-semibold
text-blue-600"
                      >
                        {edu.period}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600">{edu.major}</p>
                    </div>
                    <div className="w-1/2 flex justify-start">
                      <div
                        className="w-4 h-4
bg-blue-600 rounded-full z-10"
                      ></div>
                    </div>
                  </div>
                );
              } else {
                <div className="w-full flex" key={edu.id}>
                  <div className="w-1/2 flex justify-end">
                    <div className="w-4 h-4 bgblue-600 rounded-full z-10"></div>
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <p
                      className="font-semibold
text-blue-600"
                    >
                      {edu.period}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-600">{edu.major}</p>
                  </div>
                </div>;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
