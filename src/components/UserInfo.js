export default class UserInfo {
  constructor(titleSelector, descriptionSelector) {
    this._title = document.querySelector(titleSelector);
    this._description = document.querySelector(descriptionSelector);
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
