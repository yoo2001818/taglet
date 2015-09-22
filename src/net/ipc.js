// Abstracts IPC with promises
// TODO server to client interaction
const ipc = require('ipc');

const promises = [];

ipc.on('callback', (ticket, error, data) => {
  if (error) {
    promises[ticket].reject(data);
  } else {
    promises[ticket].resolve(data);
  }
  promises.splice(ticket, 1);
});

function send(name, ...data) {
  const ticket = promises.length;
  const promise = new Promise((resolve, reject) => {
    promises[ticket] = {
      resolve, reject
    };
  });
  ipc.send(name, ticket, ...data);
  return promise;
}

function on(name, handler) {
  ipc.on(name, (event, ticket, ...data) => {
    const promise = handler(...data);
    if (typeof promise.then !== 'function') {
      throw new Error('handler must return a promise');
    }
    promise.then(returned => {
      event.sender.send('callback', ticket, false, returned);
    }, error => {
      event.sender.send('callback', ticket, true, error);
    });
  });
}

module.exports = { send, on };
