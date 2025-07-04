// import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="profil"
      className="container mx-auto px-6 py-20 flex flexcol md:flex-row items-center"
    >
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1
          className="text-5xl font-bold text-gray-800 mb-4 animate-slidein-left"
          style={{ animationDelay: "200ms" }}
        >
          Halo, Saya <span className="text-blue-600">Nama Anda</span>
        </h1>
        <p
          className="text-xl text-gray-600 mb-8 animate-slide-in-left"
          style={{ animationDelay: "400ms" }}
        >
          Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web
          dan desain antarmuka.
        </p>
        <a
          href="#kontak"
          className="bg-blue-600 text-white font-bold py-3
px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300
inline-block animate-slide-in-left"
          style={{ animationDelay: "600ms" }}
        >
          Hubungi Saya
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center animate-slide-in-right">
        {/* <Image
          src="https://via.placeholder.com/400"
          alt="Foto Profil"
          className="w-80 h-80 rounded-full object-cover shadow-lg"
          width={320}
          height={320}
        /> */}
        <img
          src="https://via.placeholder.com/400"
          alt="Foto Profil"
          className="w-80 h-80 rounded-full object-cover shadow-lg"
        ></img>
      </div>
    </section>
  );
}
