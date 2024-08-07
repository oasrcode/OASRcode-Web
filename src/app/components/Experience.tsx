import { Job, Project } from "../interface/IExperience";
import ExperienceCard from "./ExperienceCard";
import AngularIcon from "./icons/AngularIcon";
import AzureDevOpsIcon from "./icons/AzureDevOpsIcon";
import DockerIcon from "./icons/DockerIcon";
import GitIcon from "./icons/GitIcon";
import GrafanaIcon from "./icons/GrafanaIcon";
import MongoIcon from "./icons/MongoIcon";
import NetIcon from "./icons/NetIcon";
import NodeIcon from "./icons/NodeIcon";
import PostgresIcon from "./icons/PostgresIcon";
import StudentIcon from "./icons/StudentIcon";
import WorkIcon from "./icons/WorkIcon";

export default function Experience() {
  return (
    <div className="relative flex flex-col w-full min-h-[100dvh] pt-0 lg:pt-40 mb-20  lg:items-center justify-start lg:justify-start">
      <div className="relative flex flex-col gap-10 ml-2 lg:ml-0  border-l-2 border-black  mt-10 lg:mt-20 ">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="ml-10 flex flex-row gap-5 max-w-[600px]">
            <div className="flex items-center justify-center border-[1px] border-black bg-white rounded-full w-12 h-12 absolute -left-6">{job.icon}</div>
            <div>
              <p className="text-xs lg:text-sm opacity-70">{job.date}</p>
              <p className="lg:text-2xl font-bold mt-4">{job.charge}</p>
              <p className="text-sm lg:text-lg">{job.company}</p>
              <p className="opacity-90 text-sm">{job.summ}</p>
              {job.hasProjects == true ? (
                <>
                  {" "}
                  <p className="opacity-70 text-xs mt-5">Proyectos</p>
                  {PROJECTS.map((card, index) => (
                    <ExperienceCard data={card} key={index} />
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    name: "GiseCloud",
    summ: "Desarrollo  de plataforma web de seguridad para policía local y equipos de emergencias en canarias.",
    icons: [
      AngularIcon({ width: 20, height: 20 }),
      NetIcon({ width: 20, height: 20 }),
      PostgresIcon({ width: 20, height: 20 }),
      AzureDevOpsIcon({ width: 20, height: 20 }),
      GitIcon({ width: 20, height: 20 }),
    ],
  },
  {
    name: "Plataforma iot",
    summ: "Desarrollo de plataforma web que muestra datos de sensores y gráficas de sus series temporales. Además, muestra imágenes de cámaras de seguridad con bounding boxes.",
    icons: [
      AngularIcon({ width: 20, height: 20 }),
      NodeIcon({ width: 20, height: 20 }),
      MongoIcon({ width: 20, height: 20 }),
      PostgresIcon({ width: 20, height: 20 }),
      DockerIcon({ width: 20, height: 20 }),
      GrafanaIcon({ width: 20, height: 20 }),
      AzureDevOpsIcon({ width: 20, height: 20 }),
      GitIcon({ width: 20, height: 20 }),
    ],
  },
  {
    name: "Drago Administrativo",
    summ: "Mantenimiento y desarrollos de Drago Adm, programa de escritorio para la gestión de centros de salud en canarias.",
    icons: [NetIcon({ width: 20, height: 20 }), AzureDevOpsIcon({ width: 20, height: 20 }), GitIcon({ width: 20, height: 20 })],
  },
];

const EXPERIENCE: Job[] = [
  {
    icon: WorkIcon({ width: 35, height: 35 }),
    date: "03/2023 - Actualidad",
    charge: "Fullstack Developer",
    company: "Técnicas Competitivas S.L",
    summ: "Algunos de los proyectos en los que trabajo.",
    hasProjects: true,
    Projects: PROJECTS,
  },
  {
    icon: StudentIcon({ width: 35, height: 35 }),
    date: "sept/2020 - mar/2023",
    charge: "Desarrollo de aplicaciones multimedia.",
    company: "Ciclo Superior",
    summ: "A distancia - IES El Rincón",
    hasProjects: false,
  },
  {
    icon: StudentIcon({ width: 35, height: 35 }),
    date: "may/2020",
    charge: "Inglés B2.1",
    company: "Certificación Escula Oficial de Idiomas.",
    summ: "",
    hasProjects: false,
  },
  {
    icon: WorkIcon({ width: 35, height: 35 }),
    date: "ene/2020 - may/2020",
    charge: "Gestor Moodle",
    company: "Atlas System S.L",
    summ: "Gestor de cursos en plataforma Moodle. Desde alta de alumnado y cursos, resolución de incidencias y seguimiento de los mismos.",
    hasProjects: false,
  },
  {
    icon: WorkIcon({ width: 35, height: 35 }),
    date: "sept/2020 - marz/2023",
    charge: "Desarrollador de videojuegos educativos",
    company: "Ciclo Superior",
    summ: "Desarrollo de videojuegos educativos para cursos de Servicio Canarios Público de Empleo, gamificando curso de inglés.",
    hasProjects: false,
  },
  {
    icon: StudentIcon({ width: 35, height: 35 }),
    date: "feb/2018 - ago/2018",
    charge: "Desarrollo de videojuegos",
    company: "Certificación - 600h",
    summ: "Desarrollo de videojuegos 2D y 3D con Unity.",
    hasProjects: false,
  },
];
