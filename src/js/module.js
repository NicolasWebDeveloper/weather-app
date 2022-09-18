import { getJson, getUserPosition } from './helper';

export const state = {
  weather_data: {},
  coords: {
    lat: undefined,
    lng: undefined,
  },
  articles: [],
};

export const loadCountryData = async () => {
  try {
    const weatherData = await getJson(`https://api.open-meteo.com/v1/forecast?latitude=${state.coords.lat}&longitude=${state.coords.lng}&hourly=temperature_2m`);
    state.weather_data = weatherData.hourly;
  } catch (err) {
    throw err;
  }
};

export const getCountryFromCoords = async country => {
  try {
    const countryData = await getJson(`https://geocoding-api.open-meteo.com/v1/search?name=${country}`);
    if (!countryData.results) throw 'Country is invalid!';
    const { latitude: lat, longitude: lng } = countryData.results[0];
    state.coords.lat = lat;
    state.coords.lng = lng;
  } catch (err) {
    throw err;
  }
};

export const getNews = async () => {
  try {
    const newsData = await getJson('INSERT_YOUR_API_HERE');
    state.articles = newsData.articles;
  } catch (err) {
    throw err;
  }
};

export const init = async () => {
  try {
    const pos = await getUserPosition();
    state.coords.lat = pos.coords.latitude;
    state.coords.lng = pos.coords.longitude;
  } catch (err) {
    throw 'Error while loading the Page! Please make sure to enable Tracking!';
  }
};
