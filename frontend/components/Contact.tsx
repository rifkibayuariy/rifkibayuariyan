import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <footer id="contacts" className="pt-16 pb-8 bg-secondary text-white shadow">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle title="Contacts Me!" />
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-slate-500 font-jakarta">
          &copy; {new Date().getFullYear()} Rifki Bayu Ariyanto. Created with{" "}
          {"NextJS"}
        </p>
      </div>
    </footer>
  );
}
