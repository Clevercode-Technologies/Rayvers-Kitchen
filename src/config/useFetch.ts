import { useEffect, useState } from "react";
import { BASE_URL } from "../components/DEFAULTS";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { setDishes, setRestaurants } from "../Redux/Splice/AppSplice";
import { Dish, Restaurant } from "../../type";

interface ReturnType {
  error: string | null;
  loading: boolean;
  restaurants: Restaurant[] | null;
  dishes: Dish[] | null;
  reFetch: (type: string) => void;
}

export const useFetch: (type: "restaurants" | "dishes") => ReturnType = (
  type: "restaurants" | "dishes"
): ReturnType => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [dishes, setDishes] = useState<Dish[] | null>(null);

  const token = useSelector((state: RootState) => state.data.token);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/${type}/`, {
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

        if (type === "restaurants") {
          setRestaurants(results);
        } else if (type === "dishes") {
          setDishes(results);
        }
      } else {
        const responseBody = await response.json();
        setError(responseBody);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const reFetch = async (type: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/${type}/`, {
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

        if (type === "restaurants") {
          setRestaurants(results);
        } else if (type === "dishes") {
          setDishes(results);
        }
      } else {
        const responseBody = await response.json();
        setError(responseBody);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  }


  useEffect(() => {
    fetchData();
  }, [type, token]);

  return {
    error,
    loading,
    restaurants,
    dishes,
    reFetch,
  };
};
