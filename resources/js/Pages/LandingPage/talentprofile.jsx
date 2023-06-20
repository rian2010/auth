import Kampus from "@/Images/Kampus.jpg";
import Icon from "@/Images/wallpaper.jpg";
import { useForm, usePage } from "@inertiajs/react";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Poltek from "@/Images/rename.png";
import {
  AcademicCapIcon,
  ArrowUturnLeftIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export default function generate() {
  const user = usePage().props.auth.user;
  const { talents, education, achivement, experience, organization } =
    usePage().props;

  const handleGoBack = () => {
    window.history.back();
  };

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const handlePrint = () => {
    window.print();
  };

  const talent = talents.find((talent) => talent.id === talentId);
  const talentId = 1;

  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("print");
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        document.body.classList.add("print-mode");
        setIsPrinting(true);
      } else {
        document.body.classList.remove("print-mode");
        setIsPrinting(false);
      }
    };

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
      document.body.classList.remove("print-mode");
    };
  }, []);

  return (
    <div className="py-12">
      <div
        className={`flex flex-col items-center justify-center bg-white h-full ${
          isPrinting ? "print-mode" : ""
        }`}
        style={{
          backgroundImage: isPrinting ? `url(${Poltek})` : "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`bg-white w-11/12 sm:w-10/12 md:w-8/12 overflow-hidden ${
            isPrinting ? "shadow-none" : "shadow-lg"
          } sm:rounded-lg p-6`}
        >
          <div className="flex flex-col items-center">
            <button
              className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center print:hidden"
              onClick={handleGoBack}
            >
              <ArrowUturnLeftIcon className="h-5 w-5 mr-2" />
              Back
            </button>

            {isPrinting ? null : (
              <div
                className="relative w-full h-16 rounded-t-lg mb-4"
                style={{
                  backgroundImage: `url(${Kampus})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              ></div>
            )}
            <img
              src={Icon}
              alt="Profile Picture"
              className="h-16 w-16 rounded-full bg-gray-200 relative z-10"
            />
            <h2 className="text-center text-xl mt-2">{data.name}</h2>
            <h2 className="text-center text-base text-gray-900 mt-2">
              Teknologi Rekayasa Perangkat Lunak
            </h2>
            <div className="flex justify-center items-center mt-2">
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              <p>Software Engineer</p>
            </div>
            <div className="flex justify-center items-center mt-2">
              <TrophyIcon className="h-5 w-5 mr-2" />
              <p>3 years of experience</p>
            </div>
            {!isPrinting && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mt-4 print:hidden"
                onClick={handlePrint}
              >
                <PrinterIcon className="h-5 w-5 mr-2" />
                Print
              </button>
            )}
          </div>
          <div className="mt-8">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Education</h3>
              <div className="mt-2">
                {Array.isArray(education) && education.length > 0 ? (
                  education.map((edu) => (
                    <div key={edu.id} className="mb-2">
                      <h4 className="text-base font-semibold">{edu.school}</h4>
                      <p className="text-sm">{edu.degree}</p>
                      <p className="text-sm">{edu.major}</p>
                      <p className="text-sm">
                        {edu.start_year} - {edu.end_year}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No education records found.</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Achievements</h3>
              <div className="mt-2">
                {Array.isArray(achivement) && achivement.length > 0 ? (
                  achivement.map((ach) => (
                    <div key={ach.id} className="mb-2">
                      <h4 className="text-base font-semibold">{ach.title}</h4>
                      <p className="text-sm">{ach.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No achievement records found.</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Experience</h3>
              <div className="mt-2">
                {Array.isArray(experience) && experience.length > 0 ? (
                  experience.map((exp) => (
                    <div key={exp.id} className="mb-2">
                      <h4 className="text-base font-semibold">
                        {exp.position}
                      </h4>
                      <p className="text-sm">{exp.company}</p>
                      <p className="text-sm">{exp.location}</p>
                      <p className="text-sm">
                        {exp.start_date} - {exp.end_date}
                      </p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No experience records found.</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Organization</h3>
              <div className="mt-2">
                {Array.isArray(organization) && organization.length > 0 ? (
                  organization.map((org) => (
                    <div key={org.id} className="mb-2">
                      <h4 className="text-base font-semibold">{org.name}</h4>
                      <p className="text-sm">{org.position}</p>
                      <p className="text-sm">{org.start_date}</p>
                      <p className="text-sm">{org.end_date}</p>
                      <p className="text-sm">{org.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No organization records found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
