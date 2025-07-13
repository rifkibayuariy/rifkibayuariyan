"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface skill {
  name: string;
  icon: string;
}

export default function Skills() {
  const [skills, setSkills] = useState<skill[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/skills`;

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get(API_URL);
        setSkills(response.data);
      } catch (error) {
        console.error("Gagal mengambil data skill:", error);
        setError("Gagal mengambil data skill");
      }
    };

    fetchSkillsData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills and Tools" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="aspect-square relative group bg-slate-100 rounded-xl flex items-center justify-center p-4 overflow-hidden"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="w-2/3 h-2/3 object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/20 backdrop-filter backdrop-blur-md transition-opacity text-main font-redhat font-extrabold text-lg">
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
