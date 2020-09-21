import React from 'react';
import { Link } from 'react-router-dom';

function Login({ setSigninFormState, onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setSigninFormState(true);
  }, []);

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function submitForm(evt) {
    evt.preventDefault();
    onLogin(email, password);
  }

  return (
    <main className="content">
      <form className="form" onSubmit={submitForm}>
        <h2 className="form__title">Вход</h2>
        <fieldset className="form__fieldset">
          <input placeholder="email" className="form__input" onChange={handleChangeEmail} type="email" minLength="2" maxLength="30" required />
          <input placeholder="Пароль" className="form__input" onChange={handleChangePassword} type="password" minLength="2" maxLength="30" required />
        </fieldset>
        <button className="form__submit">Вход</button>
        <div className="form__signin">
          <p className="form__signin_text">Еще не зарегистрированы?</p>
          <Link className="form__signin_link" to="/signup">Регистрация</Link>
        </div>
      </form>
      </main>
  )
}

export default Login;
