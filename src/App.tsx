import { Footer } from "./components/Footer";
import { WeatherCard } from "./components/WeatherCard";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { SearchInput } from "./components/SearchInput";
import { useWeather } from "./context/weatherContext";
import { Loading } from "./components/Loading";

export const App = () => {
  const { iconUrl, searchPressed, setSearch, showCard, weather, windDeg, isLoadingWeather, errorMessage } = useWeather();

  if (isLoadingWeather) return <Loading />;

  return (
    <Container>
      <Header />
      <SearchInput setSearch={setSearch} searchPressed={searchPressed} />

      {showCard && (
        <WeatherCard
          weather={weather}
          windDeg={windDeg}
          iconUrl={iconUrl}
          errorMessage={errorMessage}
        />
      )}
      
      <Footer />
    </Container>
  );
};
