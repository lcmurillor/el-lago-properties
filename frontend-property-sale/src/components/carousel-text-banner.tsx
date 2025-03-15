import { useNavigate } from "react-router-dom";
import { Carousel, CarouselItem, Card, CardContent, CarouselContent } from "@/components";
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}


export const dataCarousel = [
  {
    id: 1,
    title: "Propiedades en Remate",
    description: "Deuentos del 30% a los clientes frecuente",
    link: "#",
  },
  {
    id: 2,
    title: "Nuevas propiedades",
    description: "Actualizamos las propiedades todas las semanas",
    link: "#",
  },
  {
    id: 3,
    title: "Compra y venta de propieedades",
    description: "También te podemos ayudar con la venta de tu propiedad",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const navigator = useNavigate();

  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[Autoplay({ delay: 2500 })]}
      >
       <CarouselContent>
       {dataCarousel.map(({ id, title, link, description }) => (
          <CarouselItem
            key={id}
            onClick={() => navigator(link)}
            className="cursor-pointer"
          >
            <div>
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                  <p className="sm:text-lg text-wrap dark:text-secondary">
                    {title}
                  </p>
                  <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
       </CarouselContent>
       {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
