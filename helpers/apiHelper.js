import axios from 'axios';
const url = 'https://api.npms.io/v2/search';


function getFromServer(query) {
    let url = `https://api.npms.io/v2/search?q=${query}`;
    return axios.get(url)
        .then((res) => {
        return res;
        })
        .catch((err) => {
        console.log('err in apiHelper: ', err);
        });
}

module.exports = getFromServer;