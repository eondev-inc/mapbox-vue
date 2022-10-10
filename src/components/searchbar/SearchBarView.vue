<template>
    <div class="searchbar-container">
        <input class="form-control" type="text" v-model="searchTerm" />
        <SearchResultsView />
    </div>
</template>
<script lang="ts" src="./SearchBar" />

<style scoped>
.searchbar-container {
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    max-width: 50%;
}
</style>