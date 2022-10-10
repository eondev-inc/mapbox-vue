import { createStore } from 'vuex';
import mapModule from './map';
import { MapState } from './map/state';
import placesModule from './places';
import { PlacesState } from './places/state';


export interface StateInterface {
  places: PlacesState,
  map: MapState,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
});