"use client"

import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

//Icons
import JavascriptIcon from "@/assets/icons/javascript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import PHPIcon from "@/assets/icons/php.svg";
import JavaIcon from "@/assets/icons/java.svg";
import CSharpIcon from "@/assets/icons/csharp.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import MySqlIcon from "@/assets/icons/mysql.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import MariaDbIcon from "@/assets/icons/mariadb.svg";
import PostgressIcon from "@/assets/icons/postgresql.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import AwsIcon from "@/assets/icons/aws.svg";
import GcpIcon from "@/assets/icons/gcp.svg";

//Images
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

//Components
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";


const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GitHubIcon,
  },
  {
    title: "Next.JS",
    iconType: NextJsIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Node.JS",
    iconType: NodeIcon,
  },
  {
    title: "PHP",
    iconType: PHPIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "C#",
    iconType: CSharpIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Bootstrap",
    iconType: BootstrapIcon,
  },
  {
    title: "MySQL",
    iconType: MySqlIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "MariaDB",
    iconType: MariaDbIcon,
  },
  {
    title: "Postgress",
    iconType: PostgressIcon,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon,
  },
  {
    title: "AWS",
    iconType: AwsIcon,
  },
  {
    title: "GCP",
    iconType: GcpIcon,
  },
];

const hobbies = [
  {
    title: "Jogos",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Musculação",
    emoji: "🏋🏾",
    left: "5%",
    top: "5%",
  },
  {
    title: "Edição",
    emoji: "🎬",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gravação",
    emoji: "🎥",
    left: "10%",
    top: "35%",
  },
  {
    title: "Futebol",
    emoji: "⚽",
    left: "70%",
    top: "45%",
  },
  {
    title: "Música",
    emoji: "🎸",
    left: "45%",
    top: "70%",
  },
  {
    title: "Culinária",
    emoji: "🍔",
    left: "5%",
    top: "65%",
  },
]

export const AboutSection = () => {

  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Um Mergulho no Meu Mundo"
          description="Conheça mais sobre mim, quem eu sou e o que me inspira."
        />
        <div className="mt-20 gap-8 flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px]">
                <CardHeader
                  title="Graduações"
                  description="Veja a base acadêmica que moldou minha perspectiva."
                  className=""
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book Cover" />
                </div>
              </Card>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px]">
                <CardHeader
                  title="Stack de Tecnologias"
                  description="Descubra as tecnologias que utilizo para construir aplicações poderosas e com excelente experiência de usuário."
                  className=""
                />
                <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:55s]" />
                <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:35s]" />
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px] flex flex-col">
                <CardHeader
                  title="Além do Código"
                  description="Veja meus hobbies e interesses além da bolha digital."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}
                >
                  {hobbies.map(hobby => (
                    <motion.div key={hobby.title}
                      className="inline-flex items-center gap-2 py-1.5 px-6 absolute
                     bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"
                      style={{ left: hobby.left, top: hobby.top, }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px] relative">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2 size-20
             rounded-full after:content-['']
             after:absolute after:inset-0 after:outline after:outline-2
             after:-outline-offset-2 after:rounded-full
             after:outline-gray-950/30">
                  <div
                    className="absolute inset-0 rounded-full
                    bg-gradient-to-r from-emerald-300 to-sky-400 -z-20
                    animate-ping [animation-duration:2s]"
                  ></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileMemoji} alt="smiling memoji" className="size-20 mt-2" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
