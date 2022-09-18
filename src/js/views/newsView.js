import View from './View.js';

class NewsView extends View {
  _parentEl = document.querySelector('.articles');
  _data;
  constructor() {
    super();
  }

  render(data) {
    this._data = data;
    console.log(this._data);
    this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  _generateMarkup() {
    return this._data
      .map(article => {
        return `
        <div class="article">
            <div class="article-main">
                <h2 class="article-title">${article.title.length > 30 ? article.title.slice(0, 30) + '....' : article.title}</h2>
                <p class="article-text">${article.description}</p>
            </div>
            <div class="article-right">
                <a href="${article.url}" class="article-btn">Open Article</a>
            </div>
        </div>
    `;
      })
      .join('');
  }
}

export default new NewsView();
