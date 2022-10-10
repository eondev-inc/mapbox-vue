import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/place.interface";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: 'SearchResults',
    setup() {
        const { places, isLoadingPlaces, userLocation } = usePlacesStore();
        const activePlace = ref('');
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
        

        watch(places, (newPlaces) => {
            activePlace.value = '';
            setPlaceMarkers(newPlaces);
        })


        return {
            places,
            isLoadingPlaces,
            activePlace,
            onPlaceClicked: (place: Feature) => {

                activePlace.value = place.id;
                const [lng, lat] = place.center;
                
                map.value?.flyTo({
                    zoom: 14,
                    center: [lng, lat]
                })
            },
            getRouteDirections: (place: Feature) => {
                if(!userLocation.value) return;

                activePlace.value = place.id;
                const [lng, lat] = place.center;

                const [startLng, startLat] = userLocation.value;
                
                const start: [number, number] = [startLng, startLat]
                const end: [number, number] = [lng, lat]
                
                getRouteBetweenPoints( start, end );
            }
        }
    }
});