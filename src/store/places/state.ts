import { Feature } from "@/interfaces/place.interface";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; //lng, lat
    isLoadongPlaces: boolean;
    places: Feature[];
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        places: [],
        isLoadongPlaces: false,
    }
}

export default state;