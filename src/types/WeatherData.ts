export type WeatherData = Partial<{
    name: string;
    weather: Weather[]
    sys: {
      country?: string;
    };
    main: {
      temp?: number;
    };
    wind: {
      speed?: number;
      deg?:number;
    };
}>

type Weather = {
    icon?: string;   
}