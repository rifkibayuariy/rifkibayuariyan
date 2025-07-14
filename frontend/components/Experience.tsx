import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto">
        <SectionTitle title="Experience" />
        <div className="px-8">
          <div className="flex flex-row justify-center gap-2">
            <div className="aspect-square p-6 rounded-lg flex items-center bg-teal-500">
              <h2 className="font-redhat text-center text-white font-bold">
                <span className="text-6xl">2</span>
                <br />
                <span>Years</span>
              </h2>
            </div>
            <div className="bg-slate-100 rounded-lg py-8 px-8 xl:px-12 flex flex-col">
              <p className="font-extrabold w-fit text-sm font-redhat bg-main text-white px-2 py-0.5 rounded-lg">
                2021 - 2023
              </p>
              <h2 className="text-main font-extrabold font-redhat leading-5 mt-2 xl:text-xl">
                Full-stack<br className="xl:hidden"></br>Web Developer
              </h2>
              <p className="mt-4 text-main">CV. Karya Hidup Sentosa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
