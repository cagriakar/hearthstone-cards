import API from '../api/API';

export default async function swrFetcher(...args) {
    const response = await API.get(...args);
    return response.data ?? response;
}
