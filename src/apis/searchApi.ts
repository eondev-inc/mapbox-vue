import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        country: 'cl',
        access_token: 'pk.eyJ1IjoieWVyZmZyZXkiLCJhIjoiY2w3MHYyNDJwMGk0ZjNvbXY5OWM4M2xpNSJ9.7UB6C0hsRUV04be5geL0yQ'
    }
});


export default searchApi;
