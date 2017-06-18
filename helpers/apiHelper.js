import axios from 'axios';
const url = 'https://api.npms.io/v2/search';


function getFromServer(query, from, size) {
    let url = `https://api.npms.io/v2/search?q=${query}&from=${from}&size=${size}`;
    return axios.get(url)
        .then((res) => {
        return res;
        })
        .catch((err) => {
        console.log('err in apiHelper: ', err);
        });
}

module.exports = getFromServer;