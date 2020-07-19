import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js'

function Main(props) {
  const [userInfo, setUserInfo] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(user => {
        setUserInfo(user)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getDefaultCards()
      .then(cards => {
        setCards(cards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button onClick={props.editAvatar} className="profile__avatar-button">
            <img className="profile__avatar" alt="Ваше фото" src={userInfo.avatar}/>
          </button>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__title">{userInfo.name}</h1>
              <button className="profile__edit-button" type="button" onClick={props.editProfile}></button>
            </div>
  <p className="profile__subtitle">{userInfo.about}</p>
          </div>
        </div>
        <button className="open-newcard-popup-button" onClick={props.addPlace}></button>
      </section>

      <section className="cards-container">
        {cards.map((card) => (
          <Card key={card._id} card={card} click={props.showPic} />
        ))}
      </section>
    </main>
  )
}

export default Main
