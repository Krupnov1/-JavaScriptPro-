"use strict";

/*1. Переделайте getRequest() так, чтобы она использовала промисы.*/

// Переделать в ДЗ не fetch!!!!! а new Promise()

/*let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        cb(xhr.responseText);
      }
    }
  };
  xhr.send();
};*/

let userURL = "https://jsonplaceholder.typicode.com/users";
let getRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        };
      };
    };
    xhr.onerror = () => {
    reject(xhr.response);
    }
    xhr.send();
  });
};
  getRequest("GET", userURL)
  .then(date => console.log(date))
  .catch(err => console.log(err))
