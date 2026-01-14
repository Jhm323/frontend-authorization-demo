export const BASE_URL = "https://api.nomoreparties.co";

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      console.error("Registration error:", JSON.stringify(err, null, 2));
      return Promise.reject(err);
    });
  });
};

export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      console.error("Login error:", JSON.stringify(err, null, 2));
      return Promise.reject(err);
    });
  });
};
