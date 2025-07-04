import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <footer id="kontak" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle title="Hubungi Saya" />
        <p className="text-xl text-gray-300 mb-8">
          Jangan ragu untuk terhubung atau bertanya.
        </p>
        <a
          href="mailto:emailanda@example.com"
          className="bg-blue-600 textwhite font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transitioncolors duration-300 inline-block mb-12"
        >
          Kirim Email
        </a>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:textwhite transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:textwhite transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()}
          Nama Mahasiswa. Dibuat dengan{" "}
        </p>
      </div>
    </footer>
  );
}
