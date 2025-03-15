import { useEffect, useState } from "react";

const useGetFeaturedProducts = () => {
  const url = `${import.meta.env.VITE_API_URL}/api/properties?filters[isFeatured][$eq]=true&populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [url]);

  return {result, loading, error}
};

export default useGetFeaturedProducts;
