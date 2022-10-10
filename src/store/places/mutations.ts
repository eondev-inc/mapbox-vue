import { Feature } from '@/interfaces/place.interface';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, coords: GeolocationCoordinates) {
        state.userLocation = [coords.longitude, coords.latitude]
        state.isLoading = false;
    },

    setIsLoadingPlaces(state) {
        state.isLoadongPlaces = true
    },

    setPlaces(state, places: Feature[]) {
        state.places = places;
        state.isLoadongPlaces = false;
    }
}


export default mutation;