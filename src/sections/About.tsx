import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

//Icons
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "ChromeIcon",
    iconType: ChromeIcon,
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
  }
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
    title: "Cozinhar",
    emoji: "🍔",
    left: "5%",
    top: "65%",
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
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
                <ToolboxItems items={toolboxItems} className="" />
                <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
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
                <div className="relative flex-1">
                  {hobbies.map(hobby => (
                    <div key={hobby.title}
                      className="inline-flex items-center gap-2 py-1.5 px-6 absolute
                     bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"
                      style={{ left: hobby.left, top: hobby.top, }}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </div>
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
             rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-['']
             after:absolute after:inset-0 after:outline after:outline-2
             after:-outline-offset-2 after:rounded-full
             after:outline-gray-950/30">
                  <Image src={smileMemoji} alt="smiling memoji" className="size-20 mt-2" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
