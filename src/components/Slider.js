export default class Slider {
  constructor(
    toggleLeft,
    toggleRight,
    videosElement,
    videos,
    moveCount,
  ) {
    this._videosElement = videosElement;
    this._toggleRight = toggleRight;
    this._toggleLeft = toggleLeft;
    this._videos = videos;
    this._moveCount = moveCount;
    this._position = 0;
    this._videoCount = this._videos.length - 1;
  }
  _changeDisplay() {
    this._videos.forEach((element, index) => {
      if (index === this._position || index === this._position + 1) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }
  _refresh(direction) {
    switch (direction) {
      case 'right':
        if (this._videoCount <= 1 || this._videoCount - this._position <= 1) return;
        this._position = this._position + 2;
        break;
      case 'left':
        if (this._videoCount <= 1 || this._position <= 1) return;
        this._position = this._position - 2;
        break;
    }
    this._changeDisplay();
  }
  addListeners() {
    this._toggleRight.addEventListener('click', () => this._refresh('right'));
    this._toggleLeft.addEventListener('click', () => this._refresh('left'));
    this._changeDisplay();
  }
}
