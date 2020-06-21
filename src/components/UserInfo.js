export default class UserInfo {
  constructor(title, description) {
    this._title = document.querySelector(title);
    this._description = document.querySelector(description);
  }

  getUserInfo() {
    return {
      title: this._title.textContent,
      description: this._description.textContent,
    };
  }

  setUserInfo(data) {
    this._title.textContent = data.title;
    this._description.textContent = data.description;
  }
}
