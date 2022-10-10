import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoieWVyZmZyZXkiLCJhIjoiY2w3MHYyNDJwMGk0ZjNvbXY5OWM4M2xpNSJ9.7UB6C0hsRUV04be5geL0yQ';

if(!navigator.geolocation) {
    throw new Error('Tu navegador no soporta GeoLocation');
}

createApp(App).use(store).use(router).mount('#app')
