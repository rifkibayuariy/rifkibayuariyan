"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [projects, setProject] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/projects`;

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProject(response.data);
      } catch (error) {
        console.error("Gagal mengambil data project:", error);
        setError("Gagal mengambil data project");
      }
    };

    fetchProjectsData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" />
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides
          loop
          pagination={{ clickable: true }}
          modules={[Pagination]}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            setCurrentIndex(realIndex);
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <Link href={project.link} target="_blank">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10">
                    <h3 className="text-lg font-semibold font-redhat">
                      {project.title}
                    </h3>
                    <p className="text-sm font-jakarta">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4 text-center text-sm text-main font-jakarta font-semibold">
          Project {currentIndex + 1} / {projects.length}
        </div>
      </div>
    </section>
  );
}
