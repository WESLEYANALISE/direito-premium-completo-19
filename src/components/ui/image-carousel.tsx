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
      <Carousel className="w-full max-w-7xl mx-auto" opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="group cursor-pointer">
                <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-glow hover:border-gold/30 transition-all duration-300 hover:scale-105">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-3 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="text-xs text-muted-foreground text-center line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
        <CarouselNext className="right-2 md:right-4 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
      </Carousel>
    </div>
  );
};