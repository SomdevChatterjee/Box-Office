const API_BASE_URL = 'https://api.tvmaze.com/';


async function apiGet(queryString){
    const response = await fetch(`${API_BASE_URL}${queryString}`)
}