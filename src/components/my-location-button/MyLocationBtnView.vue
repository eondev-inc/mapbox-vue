<template>
    <button v-if="isBtnReady"
        @click="onMyLocationClicked"
        class="btn btn-primary"
    > Ir a mi ubicación {{isBtnReady}}</button>
</template>

<script lang="ts" src="./MyLocationBtn.ts" />

<style scoped>
    button {
        position: fixed;
        top: 30px;
        right: 30px;
    }
</style>