import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { ResponseType, Property} from "@/types/";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  IconButton,
  SkeletonSchema,
} from "@/components";
import { Bath, Bed, Expand, Proportions, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();

  const navigator = useNavigate();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8 font-semibold">
        Featured Properties
      </h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((property: Property) => {
              const {
                id,
                images,
                title,
                slug,
                location,
                price,
                map_location_url,
                bedrooms,
                bathrooms,
                size,
              } = property;
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <img   className="w-[300px] h-[200px] object-cover rounded-md"
                          src={`${import.meta.env.VITE_API_URL}${
                            images[0].url
                          }`}
                          alt="img"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => navigator(`property/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => navigator(`property/${'#'}`)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex flex-col gap-2 px-8">
                        <h3 className="text-lg font-bold text-[#853943]  line-clamp-3">{title}</h3>
                        <NumericFormat
                          className="flex text-2xl"
                          value={price.toFixed(2)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                          suffix={" USD"}
                        />
                        <Link
                          to={map_location_url}
                          className="hover:underline me-4 md:me-6"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              map_location_url,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          {location}
                        </Link>
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <Bed strokeWidth={1}/> {bedrooms}
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath strokeWidth={1}/> {bathrooms}
                          </div>
                          <div className="flex items-center gap-2">
                            <Proportions strokeWidth={1}/> {size} Acre
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
