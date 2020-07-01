export default class UserInfo {
  constructor({ name, description, avatar }) {
    this._name = name;
    this._description = description;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
      id: this._myId,
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    this._avatar.src = data.avatar;
    this._myId = data._id;
  }
}
