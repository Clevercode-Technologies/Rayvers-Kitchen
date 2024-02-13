import { useEffect, useState } from "react";
import { BASE_URL } from "../components/DEFAULTS";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setDishes, setRestaurants } from "../Redux/Splice/AppSplice";
import { Categories, Dish, Restaurant } from "../../type";

interface ReturnType {
  error: string | null;
  loading: boolean;
  categories: Categories[] | null;
  reFetch: () => void;
}

export const fetchCategories: () => ReturnType = (): ReturnType => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Array<Categories> | null>(null);

  const token = useSelector((state: RootState) => state.data.token);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/categories/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        const responseBody = await response.json();
        const { results } = responseBody;
        setLoading(false);
        setError(null);
        setCategories(results);
        
      } else {
        const responseBody = await response.json();
        setError(responseBody);
        setCategories(null);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
      setError(error.message);
      setCategories(null);
    }
  };

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/categories/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        const responseBody = await response.json();
        const { results } = responseBody;
        setLoading(false);
        setError(null);
        setCategories(results);
        
      } else {
        const responseBody = await response.json();
        setError(responseBody);
        setCategories(null);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
      setError(error.message);
      setCategories(null);
    }
  }

  useEffect(() => {
    fetchData();
  }, [token]);

  return {
    error,
    loading,
    reFetch,
    categories,
  };
};
