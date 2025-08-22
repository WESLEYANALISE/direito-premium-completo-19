import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import appScreen111 from "@/assets/app-screen-111.png";
import appScreen112 from "@/assets/app-screen-112.png";
import appScreen113 from "@/assets/app-screen-113.png";
import appScreen114 from "@/assets/app-screen-114.png";
import appScreen115 from "@/assets/app-screen-115.png";
import appScreen117 from "@/assets/app-screen-117.png";
import appScreen118 from "@/assets/app-screen-118.png";

const carouselImages = [
  { src: appScreen111, alt: "Tela inicial do app Direito Premium" },
  { src: appScreen112, alt: "Interface de estudos e questões" },
  { src: appScreen113, alt: "Dashboard de progresso do usuário" },
  { src: appScreen114, alt: "Biblioteca de conteúdos jurídicos" },
  { src: appScreen115, alt: "Sistema de simulados e provas" },
  { src: appScreen117, alt: "Área de certificações e conquistas" },
  { src: appScreen118, alt: "Funcionalidades premium do aplicativo" },
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
      <Carousel className="w-full max-w-full mx-auto" opts={{ align: "center", loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
              <div className="group cursor-pointer">
                <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-glow hover:border-gold/30 transition-all duration-300 hover:scale-105">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="h-80 md:h-96 lg:h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-3 bg-gradient-to-t from-background/90 to-transparent absolute bottom-0 left-0 right-0">
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