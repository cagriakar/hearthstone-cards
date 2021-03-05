import axios from 'axios';

const API = axios.create({
    baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '1e25fb5fa7mshcde8da34b57b73ap1d8f3ajsn521b9251394a',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
});

export default API;
