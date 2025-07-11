import Images from "next/image";

export default function Hero() {
  return (
    <section
      className="h-176 pb-8 md:pb-12 lg:pb-0 md:h-screen w-full bg-secondary flex flex-row relative"
      id="profile"
    >
      <div className="h-full flex-1/4 flex items-start lg:items-center lg:justify-end">
        <div className="lg:-mr-24 mt-48 md:mt-60 lg:mt-0 w-76 md:w-156 lg:w-fit px-12 md:px-24 lg:px-0">
          <h2 className="font-redhat text-main mb-2 text-2xl md:text-3xl lg:text-4xl">
            Hello, I'm
          </h2>
          <h1 className="font-extrabold text-main text-4xl md:text-6xl font-redhat">
            Rifki Bayu
          </h1>
          <p className="w-full lg:w-88 text-md md:text-xl text-slate-500 mt-10 lg:mt-12">
            I am a full-stack web developer who interested in the Javascript
            language. However, in my work practice I mostly use the PHP
            language. I'm currently trying to learn ReactJS.
          </p>
        </div>
      </div>
      <div className="max-w-1/2 flex-1/2 hidden lg:flex items-end">
        <Images
          src="/images/profile-cropped.png"
          alt="Hero Image"
          className="object-contain"
          fill
        ></Images>
      </div>
      <div className="absolute right-0 top-0 bottom-0 z-0 lg:hidden">
        <Images
          src="/images/profile-cropped-half.png"
          alt="Hero Image"
          width={300}
          height={600}
          className="h-full w-auto"
        ></Images>
      </div>
      <div className="h-full flex-1/4 lg:flex items-center hidden">
        <h1 className="font-redhat text-5xl text-main font-extrabold -ml-8 mt-72">
          Web<br></br>Developer
        </h1>
      </div>
    </section>
  );
}
