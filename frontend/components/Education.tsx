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

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/education`;

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
      <div className="container mx-auto">
        <SectionTitle title="Education" />
        <div className="px-8">
          <div className="flex flex-col">
            {educationHistory.map((edu, i) => {
              if (i % 2 == 0) {
                return (
                  <div key={i} className="flex flex-row relative">
                    <div className="flex-1/2 flex items-center justify-end pr-8">
                      <p className="text-white font-semibold text-xs px-2 py-0.5 bg-main rounded-md">
                        {edu.period}
                      </p>
                    </div>
                    <div className="flex-1/2 pl-8 py-6">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-redhat text-main mt-1 lg:mt-2 leading-5">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">{edu.major}</p>
                    </div>
                    <div className="absolute left-1/2 -ml-2 top-0 bottom-0">
                      <div className="relative h-full flex justify-center items-center">
                        <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full bg-teal-400 relative z-10"></div>
                        <div
                          className={`w-0.25 ${
                            educationHistory.length - 1 == i
                              ? "h-1/2 top-0"
                              : i == 0
                              ? "h-1/2 top-1/2"
                              : "h-full top-0"
                          } bg-teal-400 absolute top-0`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="flex flex-row relative">
                    <div className="flex-1/2 pr-8 py-6 text-right">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-redhat text-main mt-1 lg:mt-2 leading-5">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">{edu.major}</p>
                    </div>
                    <div className="flex-1/2 flex items-center justify-start pl-8">
                      <p className="text-white font-semibold text-xs px-2 py-0.5 bg-main rounded-md">
                        {edu.period}
                      </p>
                    </div>
                    <div className="absolute left-1/2 -ml-2 top-0 bottom-0">
                      <div className="relative h-full flex justify-center items-center">
                        <div className="w-4 xl:w-5 h-4 xl:h-5 rounded-full bg-teal-400 relative z-10"></div>
                        <div
                          className={`w-0.25 ${
                            educationHistory.length - 1 == i
                              ? "h-1/2 top-0"
                              : i == 0
                              ? "h-1/2 top-1/2"
                              : "h-full top-0"
                          } bg-teal-400 absolute top-0`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
