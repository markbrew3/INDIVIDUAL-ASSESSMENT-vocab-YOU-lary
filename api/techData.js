// import client from '../utils/client';

const endpoint = 'https://vocabyoulary-490c6-default-rtdb.firebaseio.com';

const getTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getTech,
  createTech,
  updateTech,
};
