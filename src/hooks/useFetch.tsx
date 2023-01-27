import { useEffect, useState } from "react";
import { Product } from "@/lib/product";

export const useFetch = (url: string) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const { products } = await res.json();
        setData(products);
      } catch (error: any) {
        console.log(error.message);
        setError("Houve erro ao carregar os dados!");
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
