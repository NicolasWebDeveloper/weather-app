import sidebarView from './views/sidebarView';
import * as module from './module';
import newsView from './views/newsView';

const controlSearch = async country => {
  try {
    await module.getCountryFromCoords(country);
    await module.loadCountryData();
    sidebarView.render(module.state.weather_data);
  } catch (err) {
    alert(err);
  }
};

const controlInit = async () => {
  try {
    await module.init();
    await module.loadCountryData(module.state.coords);
    sidebarView.render(module.state.weather_data);
    await module.getNews();
    newsView.render(module.state.articles);
  } catch (err) {
    alert(err);
  }
};

(() => {
  sidebarView.addHandlerSearch(controlSearch);
  controlInit();
})();
