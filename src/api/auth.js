const signUp = async (user) => {
  const url = process.env.REACT_APP_SIGN_UP_URL;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
};
const signIn = async (user) => {
  const url = process.env.REACT_APP_SIGN_IN_URL;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
};

export { signIn, signUp };
