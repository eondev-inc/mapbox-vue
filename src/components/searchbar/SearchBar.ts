import { usePlacesStore } from "@/composables";
import { computed, defineComponent, ref } from "vue";

import SearchResultsView from "../search-results/SearchResultsView.vue";

export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResultsView
    },
    setup(){
        const debouncedValue = ref('')
        const debounceTimeout = ref();
        const { searchPlacesByTerm } = usePlacesStore();
        return {
            debouncedValue,
            
            searchTerm: computed({
                get(){
                    return debouncedValue.value;
                },
                set(val: string){
                    if( debounceTimeout.value ) clearTimeout(debounceTimeout.value);
                    debounceTimeout.value = setTimeout(() => {
                        debouncedValue.value = val;
                        searchPlacesByTerm(val);
                    }, 500)
                }
            }),
        }
    }
})