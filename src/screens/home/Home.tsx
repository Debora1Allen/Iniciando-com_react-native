import React, { useEffect, useState } from "react";
import Input from "@components/input/Input";
import { Container, SectionTitle, Title } from "./Home.styles";
import { AntDesign } from "@expo/vector-icons";
import { useFetch } from "@services/useFetch/useFetch";
import { MOVIES_URL, NowPlayingMoviesResponse, TABS } from "./Home.types";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Tabs } from "@components/tabs/Tabs";
import { MoviesList } from "@components/moviesList/MoviesList";

const IMAGE_URL = "https://image.tmdb.org/t/p/w154";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(TABS.NOW_PLAYING);
  const {
    doFetch: getNowPlayingMovies,
    isFetching: isFetchingPlayingMovies,
    data: nowPlayingMovies,
  } = useFetch<NowPlayingMoviesResponse>("/movie/now_playing", "get", {
    defaultValue: { results: [] },
  });

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };
  return (
    <Container>
      <Title>What do you want to watch?</Title>
      <Input
        placeholderTextColor="#67686D"
        placeholder="Search"
        rightIcon={<AntDesign name="search1" size={24} color="#67686D" />}
      />
      <FlatList
        style={{ marginTop: 20, height: 400 }}
        horizontal
        data={nowPlayingMovies.results}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              style={{
                width: 115,
                height: 167,
                borderRadius: 16,
                marginRight: 20,
              }}
              source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
            />
          </TouchableOpacity>
        )}
      />
      <SectionTitle>Categories</SectionTitle>
      <Tabs
        onChangeTab={handleChangeTab}
        activeTab={currentTab}
        tabs={["Now playing", "Upcoming", "Top rated", "Popular"]}
      />

      <MoviesList url={MOVIES_URL[currentTab]} />
    </Container>
  );
}
