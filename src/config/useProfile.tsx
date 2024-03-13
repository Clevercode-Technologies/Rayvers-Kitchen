import { useEffect, useState } from "react";
import { BASE_URL } from "../components/DEFAULTS";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { ProfileType } from "../../type";
import { setUserProfile } from "../Redux/Splice/AppSplice";

interface ReturnType {
  error: string | null;
  loading: boolean;
  profile: ProfileType | null;
  reFetch: () => void;
}

export const useProfile: () => ReturnType = (): ReturnType => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const token = useSelector((state: RootState) => state.data.token);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}auth/users/me/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        const responseBody = await response.json();
        setLoading(false);
        setError(null);
        dispatch(setUserProfile(responseBody));
        setProfile(responseBody);
      } else {
        const responseBody = await response.json();
        setError(responseBody);
        setProfile(null);
      }
    } catch (error: any) {
      setLoading(false);
      setProfile(null);
    }
  };

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}auth/users/me/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        const responseBody = await response.json();
        setLoading(false);
        setError(null);
        dispatch(setUserProfile(responseBody));
        setProfile(responseBody);
      } else {
        const responseBody = await response.json();
        setError(responseBody);
        setProfile(null);
      }
    } catch (error: any) {
      setLoading(false);
      setProfile(null);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  return {
    error,
    loading,
    reFetch,
    profile,
  };
};
