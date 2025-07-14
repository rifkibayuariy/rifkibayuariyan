import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <footer id="contacts" className="pt-12 pb-6 bg-main text-white shadow">
      <div className="container mx-auto px-8 text-center">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1/2 lg:flex-1 pb-12">
            <h1 className="text-2xl xl:text-3xl text-left font-redhat font-extrabold">
              RIFKI BAYU <span className="text-teal-500">ARIYANTO</span>
            </h1>
            <p className="text-left mt-6 xl:text-lg">
              I am a full-stack web developer who is currently studying at a
              university. I&apos;m interested in the Javascript language,
              especially some of its frameworks and libraries. However, in my
              work practice I mostly use the PHP language. I&apos;m currently
              trying to learn ReactJS.
            </p>
          </div>
          <div className="flex-1/2 lg:flex-1 flex justify-center items-center lg:justify-end">
            <div className="flex justify-center space-x-4 mb-8">
              <Link
                href={"mailto:email.rifkibayu@gmail.com"}
                className="w-14 h-14 rounded-lg border border-white/30 flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2xl"
                  className="text-white"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/rifkibayuariyan/"}
                className="w-14 h-14 rounded-lg border border-white/30 flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2xl"
                  className="text-white"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/rifkibayuariyanto/"}
                className="w-14 h-14 rounded-lg border border-white/30 flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  className="text-white"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/rifkibayuariy"}
                className="w-14 h-14 rounded-lg border border-white/30 flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="text-white"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-white text-md font-jakarta">
          &copy; {new Date().getFullYear()} Rifki Bayu Ariyanto
        </p>
      </div>
    </footer>
  );
}
