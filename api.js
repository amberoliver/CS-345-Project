//takes 4 signup variables, returns json with the signup variables

import axios from "axios";

export async function registerUser(name, phone, email, password) {
  let res = await axios.post("https://cs-backend.herokuapp.com/register", {
    name: name,
    email: email,
    phone: phone,
    password: password,
  });
  return res.data;
}

//logs user in with email and password. returns auth token to be stored in local storage
//and presented when accessing user data

export async function loginUser(email, password) {
  let res = await axios.post("https://cs-backend.herokuapp.com/login", {
    email,
    password,
  });
  return res.headers["auth-token"];
  // .get("auth-token")
}

//for getting the users data when they login, takes the users auth token and uses it to find their
//unique information. Returns json with their data. currently doesnt support categories, will fix soon

export function getUserData(token) {
  //finish this
  fetch("https://cs-backend.herokuapp.com/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("fail");
      }
    })
    .then((data) => console.log(data));
}

//this will be for updating any of the users info, including name email phone password and category information

function updateUser(data) {}

export async function deleteUser(token) {

    let res = await axios.post({
        method: 'DELETE',
        url: 'https://cs-backend.herokuapp.com/register',
        headers: {'auth-token': token}
      });
  return res.data;
}



}