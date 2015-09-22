const ipc = require('./net/ipc.js');

document.write(require('./test.html'));
ipc.send('ping', 'client')
.then(data => {
  document.write(data);
});
