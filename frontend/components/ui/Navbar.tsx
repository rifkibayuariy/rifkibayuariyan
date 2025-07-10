export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
      <nav className="container mx-auto px-6 py-4 flex justify-between itemscenter">
        <div className="text-2xl font-bold text-gray-800">Nama Mahasiswa</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#profil"
              className="text-gray-600 hover:text-blue-500
transform hover:-translate-y-0.5 transition-all duration300"
            >
              Profil
            </a>
          </li>
          <li>
            <a
              href="#pendidikan"
              className="text-gray-600 hover:text-blue500 transform hover:-translate-y-0.5 transition-all duration300"
            >
              Pendidikan
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-gray-600 hover:text-blue-500
transform hover:-translate-y-0.5 transition-all duration300"
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              className="text-gray-600 hover:text-blue-500
transform hover:-translate-y-0.5 transition-all duration300"
            >
              Proyek
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="text-gray-600 hover:text-blue-500
transform hover:-translate-y-0.5 transition-all duration300"
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
