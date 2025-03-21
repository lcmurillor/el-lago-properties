import { useGetPropertyTypes } from "@/api/getProperties";
import { Link } from "react-router-dom";
import { ResponseType, PropertyType } from "@/types";

const ChooseCategory = () => {
  const { result, loading, error }: ResponseType = useGetPropertyTypes();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Choose a property type</h3>
      <div className="grid gap-5 sm:grid-cols-4">
        {!loading &&
          result !== undefined &&
          result.map(({ id, slug, title, images }: PropertyType) => (
            <Link
              key={id}
              to={`/property-type/${slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <div className="w-[200px] h-[400px] overflow-hidden rounded-lg">
                <img
                  src={`${import.meta.env.VITE_API_URL}${images[0].url}`}
                  alt={title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                {title}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
