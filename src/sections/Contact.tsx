import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 
        py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-20">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Pronto para levar seu projeto para o próximo nível?</h2>
              <p className="text-sm md:text-base mt-2">
                Estou aqui para ajudar você a conquistar seus objetivos e criar soluções inovadoras. Vamos começar!
              </p>
            </div>
            <div>
              <a target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=contatootirb@gmail.com&su=Contato%20do%20site&body=Olá%2C%20gostaria%20de%20entrar%20em%20contato!">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:scale-105 transition-all duration-300">
                  <span className="font-semibold">Entre em contato</span>
                  <ArrowRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
