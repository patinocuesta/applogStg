import io from 'socket.io-client';

function createSocket() {
  const socket = io(baseUrl);
  return socket;
}

const baseUrl = 'http://localhost:8080';
function fetchWrapper(apiPath, options) {
  return fetch(`${baseUrl}/api${apiPath}`, options).then(res => res.json());
}

export default {
  getLogs() {
    //qs en dur
    return fetchWrapper('/logs?domain=logger&scope=axialys');
  },
  subscribeToLogChanges(cb) {
    createSocket().on('log changeEvent', cb);
  },
};
