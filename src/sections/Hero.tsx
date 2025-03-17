import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{ backgroundImage: `url(${grainImage.src})` }}>
      </div>

      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>

      <div className="container">
        <div className='flex flex-col items-center justify-center'>
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Pessoa usando computador"
          />
        </div>

        <div className='flex justify-center items-center mx-auto bg-gray-950 border border-gray-800 px-4 py-1.5 gap-4 rounded-lg'>
          <div className='bg-green-500 w-2.5 h-2.5 rounded-full'></div>
          <div className='text-sm font-medium'>Disponível para novos projetos</div>
        </div>

        <div className='max-w-xl mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Desenvolvendo Soluções Integradas - Backend e Experiência do Usuário
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Sou desenvolvedor full stack, construo soluções robustas no backend e interfaces focadas na experiência do usuário no frontend.
            Meu trabalho combina eficiência técnica com design intuitivo para entregar aplicações completas e de alta qualidade.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Conheça Meu Trabalho</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋🏾</span>
            <span className='font-semibold '>Vamos Nos Conectar</span>
          </button>
        </div>
        <p></p>
      </div>
    </div>
  );
};
