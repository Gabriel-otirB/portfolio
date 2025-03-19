import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroObit from "@/components/HeroObit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">

      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroObit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroObit>
        <HeroObit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroObit>
        <HeroObit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroObit>
        <HeroObit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroObit>
        <HeroObit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroObit>
        <HeroObit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroObit>
        <HeroObit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroObit>
        <HeroObit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroObit>
        <HeroObit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroObit>
        <HeroObit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroObit>
        <HeroObit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroObit>

      </div>

      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Pessoa usando computador"
          />
        </div>

        <div className="flex justify-center items-center mx-auto bg-gray-950 border border-gray-800 px-4 py-1.5 gap-4 rounded-lg">
          <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Disponível para novos projetos</div>
        </div>

        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Desenvolvendo Soluções Integradas - Backend e Experiência do Usuário
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sou desenvolvedor full stack, construo soluções robustas no backend e interfaces focadas na experiência do usuário no frontend.
            Meu trabalho combina eficiência técnica com design intuitivo para entregar aplicações completas e de alta qualidade.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Conheça Meu Trabalho</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋🏾</span>
            <span className="font-semibold ">Vamos Nos Conectar</span>
          </button>
        </div>
        <p></p>
      </div>
    </div>
  );
};
