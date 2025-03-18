import { useGetPropertyTypes } from "@/api/getProperties";
import { Link } from "react-router-dom";
import { ResponseType, PropertyType } from "@/types";

const ChooseCategory = () => {
  const { result, loading, error }: ResponseType = useGetPropertyTypes();
  console.log(result);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Choose a property type</h3>
      <div className="grid gap-5 sm:grid-cols-4">
        {!loading &&
          Array.isArray(result) &&
          result.map(({ id, slug, title, images }: PropertyType) => (
            <Link
              key={id}
              to={`/property-type/${slug}`}
              className="relative max-w-[250px] mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              {images.length > 0 ? (
                <div className="w-[250px] h-[450px] overflow-hidden rounded-lg">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${images[0].url}`}
                    alt={title}
                    className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute left-0 right-0 bottom-0  bg-black/60 text-white text-center p-10 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {title}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center w-[250px] h-[450px] bg-gray-300 text-gray-600 rounded-lg">
                  No Image
                </div>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
