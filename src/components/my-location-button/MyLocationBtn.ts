
import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {
        const { map, isMapReady } = useMapStore();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        
        
        return {
            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),
            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                })
            }    
        }
    }
})