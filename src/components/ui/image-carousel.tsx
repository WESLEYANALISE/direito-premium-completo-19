import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";
import appScreen4 from "@/assets/app-screen-4.png";
import appScreen5 from "@/assets/app-screen-5.png";
import appScreen6 from "@/assets/app-screen-6.png";
import appScreen7 from "@/assets/app-screen-7.png";

const carouselImages = [
  { src: appScreen1, alt: "Interface principal do app jurídico" },
  { src: appScreen2, alt: "Tela de questões e exercícios" },
  { src: appScreen3, alt: "Dashboard de estudos e progresso" },
  { src: appScreen4, alt: "Biblioteca digital de conteúdos" },
  { src: appScreen5, alt: "Sistema de simulados e provas" },
  { src: appScreen6, alt: "Área de certificações e conquistas" },
  { src: appScreen7, alt: "Funcionalidades avançadas do app" },
];

export const ImageCarousel = () => {
  const [carouselRef, carouselInView] = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={carouselRef}
      className={`mt-8 transition-all duration-700 ${
        carouselInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
      }`}
    >
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-2">
                <div className="bg-card rounded-lg overflow-hidden shadow-card border border-border hover-scale">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};