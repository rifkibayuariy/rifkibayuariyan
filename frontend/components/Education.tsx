"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";

interface Education {
  id: number;
  period: string;
  institution: string;
  major: string;
}

export default function Education() {
  const [educationHistory, setEducationHistory] = useState<Education[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "/api/education"
      : "http://localhost:3001/api/education";

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await axios.get(API_URL);
        setEducationHistory(response.data);
      } catch (error) {
        console.error("Gagal mengambil data pendidikan:", error);
        setError("Gagal mengambil data pendidikan");
      }
    };

    fetchEducationData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Education" />
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-full">
              {educationHistory.map((edu) => {
                return (
                  <div
                    className="flex flex-row items-center lg:p-6 lg:bg-slate-100 lg:rounded-xl"
                    key={edu.id}
                  >
                    <div className="pr-8 h-full flex items-center lg:hidden">
                      <div className="h-3 w-3 rounded-full bg-main"></div>
                    </div>
                    <div>
                      <div className="w-full flex flex-col">
                        <p className="font-semibold text-xs font-jakarta text-main lg:text-white lg:px-2 lg:py-1 lg:bg-main lg:w-fit lg:font-extrabold lg:rounded-md">
                          {edu.period}
                        </p>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-redhat text-main mt-1 lg:mt-2">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">
                          {edu.major}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
