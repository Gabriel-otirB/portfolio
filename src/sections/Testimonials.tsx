import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import Card from '@/components/Card';

const testimonials = [
    {
        name: "Oliver Tadeo",
        position: "Gerente de Marketing @ Soluções Digitais",
        text: "Trabalhar com o Gabriel foi uma experiência incrível. Ele transformou nosso site em uma poderosa ferramenta de marketing. Sua atenção aos detalhes e capacidade de entender nossa marca são excepcionais. Estamos muito satisfeitos com os resultados!",
        avatar: memojiAvatar1,
    },
    {
        name: "Jeniffer Santos",
        position: "Chefe de Design @ VerdeDesign",
        text: "Trabalhar com Gabriel foi um prazer. Sua expertise no desenvolvimento frontend trouxe nossos designs à vida de uma maneira que nunca imaginamos. O site superou todas as nossas expectativas.",
        avatar: memojiAvatar2,
    },
    {
        name: "Michael Martinez",
        position: "CEO @ InovaTechnolgy Solutions",
        text: "A habilidade de Gabriel em criar experiências de usuário perfeitas é incomparável. Desde o lançamento do novo design, tivemos um aumento significativo nas conversões. Não poderíamos estar mais felizes.",
        avatar: memojiAvatar3,
    },
    {
        name: "Lorrayne Souza",
        position: "Gerente de Produto @ Nexa Innovations",
        text: "Gabriel é um verdadeiro mago do frontend. Ele transformou nosso produto complexo em uma interface de usuário intuitiva e envolvente. Já estamos recebendo feedbacks positivos dos nossos clientes.",
        avatar: memojiAvatar4,
    },
    {
        name: "Lucas Almeida",
        position: "Diretor de TI @ CorpTech Solutions",
        text: "O trabalho de Gabriel no nosso site foi nada menos que excepcional. Ele é um desenvolvedor talentoso, além de ser um excelente comunicador. Recomendamos muito seu trabalho.",
        avatar: memojiAvatar5,
    }

];

export const TestimonialsSection = () => {
    return (
        <div className='py-16 lg:py-24'>
            <div className='container'>
                <SectionHeader
                    eyebrow='Clientes Satisfeitos'
                    title='O Que Os Clientes Dizem Sobre Mim'
                    description='Não fique só na minha palavra. Confira o que meus clientes têm a dizer sobre o meu trabalho!' />
                <div className='mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                    <div className='flex gap-8 flex-none'>
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.name} className='max-w-xs md:max-w-md md:p-8'>
                                <div className='flex gap-4 items-center'>
                                    <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
                                        <Image src={testimonial.avatar} alt={testimonial.name} className='max-h-full' />
                                    </div>
                                    <div>
                                        <div className='font-semibold'>{testimonial.name}</div>
                                        <div className='text-sm text-white/40'>{testimonial.position}</div>
                                    </div>
                                </div>
                                <p className='mt-4 md:mt-6 text-sm md:text-base'>{testimonial.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
