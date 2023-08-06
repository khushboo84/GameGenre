import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface FetchResponse<T> {
  //to make the interface generic we define type as generic type for interface and array
  count: number;
  results: T[];
}
//<T> genric type data
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => setData(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error };
};

export default useData;
