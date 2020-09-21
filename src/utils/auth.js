const authInfo = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${authInfo}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error('Некорректно заполнено одно из полей');
      } else {
        localStorage.setItem('jwt', res.token);
        return res.token;
      }
    })
    .catch((err) => console.log(err))
}

export const authorize = (email, password) => {
  return fetch(`${authInfo}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error('Не передано одно из полей');
      }
      if (res.status === 401) {
        throw new Error('Пользователь с указанным email не найден');
      }
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data.token;
      }
    })
    .catch((err) => console.log(err))
}

export const getContent = (token) => {
  return fetch(`${authInfo}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error('Токен не передан или передан не в том формате');
      }
      if (res.status === 401) {
        throw new Error('Переданный токен некорректен');
      }
      return res.json();
    })
    .catch((err) => console.log(err))
  };
