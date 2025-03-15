import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { ResponseType, PropertyType, ImageType } from "@/types/";
import {
    Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  SkeletonSchema,
} from "@/components";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();

  console.log(result);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Propiedades Destacadas</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((property: PropertyType) => {
              const { id, description, images, slug, propertyName } = property;
              return <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                        <CardContent className="relative flex items-center justify-center px-6 py-2">
                          
                            
                            <img src={`${import.meta.env.VITE_API_URL}${images[0].url}`} alt="img"/>
                        </CardContent>
                    </Card>
                </div>
              </CarouselItem>;
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
