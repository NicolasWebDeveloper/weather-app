import View from './View';

class sidebarView extends View {
  _parentElement = document.querySelector('.search_form');
  _input = this._parentElement.querySelector('input');
  _temperatureElement = document.querySelector('.temperature');
  _data;

  constructor() {
    super();
  }

  render(data) {
    this._data = data;
    this._temperatureElement.textContent = data.temperature_2m[new Date().getHours()];
  }

  _clearSearchInput() {
    this._input.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler(this._input.value);
      this._clearSearchInput();
    });
  }
}

export default new sidebarView();
