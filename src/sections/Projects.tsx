import vehiql from "@/assets/images/vehiql.png";
import alvoConcreto from "@/assets/images/alvo-concreto.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Vehiql",
    year: "2025",
    title: "Plataforma de venda e gestão de veículos para Concessionárias",
    results: [
      { title: "Melhoria de 40% na Experiência do Usuário" },
      { title: "Aumento de 50% na Velocidade do Site" },
      { title: "Crescimento de 35% no Tráfego Móvel" },
    ],
    link: "https://vehiql-brown.vercel.app/",
    image: vehiql,
  },
  {
    company: "Alvo Concreto",
    year: "2025",
    title: "Landing Page Comercial para Concreteira",
    results: [
      { title: "Incremento de 20% nas Vendas" },
      { title: "Expansão de 35% no Alcance de Clientes" },
      { title: "Aumento de 15% na Reconhecimento da Marca" },
    ],
    link: "https://alvo-concreto.vercel.app/",
    image: alvoConcreto,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Impacto real com tecnologia" title="Projetos em Destaque" description="Veja como converti conceitos em soluções digitais funcionais e envolventes." />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div key={project.title} className="sticky" style={{ top: `calc(64px + ${projectIndex * 40}px)` }}>
              <Card
                className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:pt-16 lg:px-20 "
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16"> {/* or lg:pb-8 */}
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target='_blank'>
                      <button
                        className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl
                                  font-semibold inline-flex items-center gap-2 mt-8 hover:scale-105 transition-all duration-300">
                        <span>Conheça o Projeto</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative -mb-8">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
