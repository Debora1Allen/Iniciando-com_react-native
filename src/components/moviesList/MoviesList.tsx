import { NowPlayingMoviesResponse } from "@screens/home/Home.types";
import { useFetch } from "@services/useFetch/useFetch";
import React, { useEffect } from "react";

import { FlatList, View } from "react-native";

interface MoviesListProps {
  url: string;
}
export function MoviesList(props: MoviesListProps) {
  const { url } = props;

  const {
    doFetch: getMovies,
    isFetching: isFetchingPlayingMovies,
    data: nowPlayingMovies,
  } = useFetch<NowPlayingMoviesResponse>("", "get", {
    defaultValue: { results: [] },
  });

  useEffect(() => {
    getMovies("", url);
  }, [url]);
  return (
    <FlatList
      data={[1, 2, 3, 5, 6, 7, 8]}
      renderItem={({ item }) => (
        <View style={{ height: 200, backgroundColor: "blue", marginTop: 20 }} />
      )}
    />
  );
}
