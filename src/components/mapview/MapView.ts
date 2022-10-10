import { usePlacesStore, useMapStore } from "@/composables";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: 'MapView',
    setup(){
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore()

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error("Div Elelemnt no existe");
            if ( !userLocation.value ) throw new Error("user location not found");

            await Promise.resolve();
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 12, // starting zoom
            });
            
            const myLocationPopup = new Mapboxgl.Popup({offset: [0, -25]})
            .setLngLat(userLocation.value)
            .setHTML(
              `<h4>
                Aquí estoy
              </h4>
              <p>Actualmente en San Francisco</p>
              <p>${userLocation.value}</p>`
            );

            const myLocationMarket = new Mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .setPopup(myLocationPopup)
            .addTo(map);

            setMap(map)

        }

        onMounted(() => {
            if ( isUserLocationReady.value ) return initMap();
        })

        watch( isUserLocationReady, (newVal) => {
          if ( isUserLocationReady.value ) initMap();
        })

        return {
            mapElement,
            userLocation,
            isUserLocationReady
        }
    }
})