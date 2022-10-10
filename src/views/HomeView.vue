<template>
  <MapView />
  <SearchBarView />
  <MyLocationBtn />
  <TripDetailsView />
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue'
import MyLocationBtn from '@/components/my-location-button/MyLocationBtnView.vue';
import SearchBarView from '@/components/searchbar/SearchBarView.vue';
import TripDetailsView from '@/components/trip-details/TripDetailsView.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtn,
    SearchBarView,
    TripDetailsView
  },
  setup() {
    usePlacesStore();
  }
});
</script>
