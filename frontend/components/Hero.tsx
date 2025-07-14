import Images from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section
      id="profile"
      className="w-full h-screen relative bg-slate-100 overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/10 xl:-translate-y-2/5 h-2/5 md:h-3/5 xl:h-4/5 aspect-square rounded-full bg-teal-400 z-0"></div>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-8/12 xl:h-full aspect-square">
        <Images
          src="/images/profile-cropped.png"
          alt="Hero Image"
          className="object-contain"
          fill
        ></Images>
      </div>
      <div className="w-full h-full flex flex-col xl:flex-row z-10 relative">
        <div className="md:flex-1/2 mt-32 md:mt-0 flex pl-8 pr-8 md:pr-32 md:pl-32 xl:pr-0 xl:pl-16 2xl:pl-32 items-center">
          <div className="w-full xl:w-3/7">
            <h2 className="font-redhat text-main md:mb-2 text-2xl lg:text-4xl xl:text-2xl 2xl:text-4xl">
              Hello, I&apos;m
            </h2>
            <h1 className="font-extrabold text-main text-4xl lg:text-6xl xl:text-4xl 2xl:text-6xl font-redhat">
              Rifki Bayu
            </h1>
            <p className="text-md md:text-lg lg:text-2xl xl:text-lg 2xl:text-xl text-slate-600 mt-8 md:mt-12">
              I am a full-stack web developer who interested in the Javascript
              language. However, in my work practice I mostly use the PHP
              language. I&apos;m currently trying to learn ReactJS.
            </p>
          </div>
        </div>
        <div className="flex-1/2 md:flex items-center justify-end pr-16 xl:pr-16 2xl:pr-32 hidden">
          <h1 className="font-redhat md:text-4xl 2xl:text-5xl text-main font-extrabold">
            Web<br></br>
            <span className="text-teal-600">Developer</span>
          </h1>
        </div>
        <div className="absolute left-0 w-full xl:w-fit xl:left-16 2xl:left-32 bottom-8">
          <div className="flex justify-center">
            <div className="p-4 xl:p-0 bg-white/40 xl:bg-none backdrop-filter backdrop-blur-md xl:backdrop-blur-none rounded-xl flex flex-row gap-4">
              <Link
                href={"mailto:email.rifkibayu@gmail.com"}
                className="w-10 h-10 rounded-lg border border-white/30 md:bg-white flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  className="text-main"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/rifkibayuariyan/"}
                className="w-10 h-10 rounded-lg border border-white/30 md:bg-white flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  className="text-main"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/rifkibayuariyanto/"}
                className="w-10 h-10 rounded-lg border border-white/30 md:bg-white flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  className="text-main"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/rifkibayuariy"}
                className="w-10 h-10 rounded-lg border border-white/30 md:bg-white flex justify-center items-center shadow-sm"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="text-main"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
