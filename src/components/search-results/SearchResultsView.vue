<template>
    <div class="alert alert-primary text-center" v-if="isLoadingPlaces">
        <h5>Cargando...</h5>
        <span>Espere por favor</span>
    </div>

    <ul v-else-if="places.length > 0" class="list-group mt-2">
        <li v-for="place in places" :key="place.id" class="list-group-item list-group-item-action"
            @click="onPlaceClicked(place)" :class="{ 'active': place.id === activePlace }">
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div align="right">
                <button class="btn btn-outline-primary btn-sm"
                    :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)">
                    Direcciones
                </button>

            </div>
        </li>
    </ul>
</template>

<script lang="ts" src="./SearchResults.ts" />

<style scoped>
li {
    cursor: pointer;
    width: 350px;
}
</style>