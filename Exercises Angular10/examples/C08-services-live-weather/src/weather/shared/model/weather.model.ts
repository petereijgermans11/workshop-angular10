// Weather.model.ts
export interface IWeather {
  coord: Coord;
  weather: WeatherEntity[];
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class WeatherModel implements IWeather {
	constructor(
        public coord:Coord,
        public weather:WeatherEntity[],
        public base:string,
        public main:Main,
        public wind: Wind,
        public clouds: Clouds,
        public dt:number,
        public sys:Sys,
        public id:number,
        public name:string,
        public cod:number) {
	}
}

