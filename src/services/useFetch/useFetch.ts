import { useState } from "react";
import api, { to } from "@services/api";

interface Config<FetchData> {
  defaultValue?: any;
  onSuccess?: (response: FetchData) => void;
  onError?: (error: Error | null) => void;
  fetchConfig?: any;
  headers?: any;
  fullResponse?: boolean;
}

type Method = "get" | "post" | "put" | "delete" | "patch";

export const useFetch = <FetchData = any>(
  path: string,
  method: Method = "get",
  config: Config<FetchData> = {}
) => {
  const { defaultValue, onSuccess, onError, fetchConfig } = config;
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<FetchData>(defaultValue);

  const doFetch = async (
    params: any = undefined,
    newPath = path
  ): Promise<FetchData | boolean> => {
    setIsFetching(true);
    const [error, response] = await to<{ data: FetchData }>(
      api({ headers: config.headers, fullResponse: config.fullResponse })[
        method
      ](newPath, params, fetchConfig || {})
    );
    setIsFetching(false);

    if (response) {
      if (onSuccess) {
        onSuccess(response.data);
      }

      setData(response.data);
      return response.data;
    }

    if (error) {
      if (onError) {
        onError(error || null);
      }

      return false;
    }

    return true;
  };

  const updateData = (modifiedData: FetchData) => setData(modifiedData);

  return { isFetching, doFetch, data, updateData };
};
