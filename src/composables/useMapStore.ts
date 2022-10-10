import { Feature } from "@/interfaces/place.interface";
import store, { StateInterface } from "@/store"
import { LngLat } from "@/store/map/actions";
import Mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {
    const state = useStore<StateInterface>();

    return {
        //Getters
        isMapReady: computed(() => store.getters['map/isMapReady']),

        map: computed(() => state.state.map.map),
        distance: computed(() => state.state.map.distance),
        duration: computed(() => state.state.map.duration),
        //Mutations
        setMap: (map: Mapboxgl.Map ) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places),
        //Actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', {start, end})
    }
}