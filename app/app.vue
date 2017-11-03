<template>
    <div class="app">
        <auto-complete :list="filteredEmployees" @filter="filterEmployee"></auto-complete>
        <auto-complete :list="filteredArtists" @filter="filterArtist"></auto-complete>
    </div>
</template>

<script>
    import Artists from './models/artists';
    import Employees from './models/employees';
    import AutoComplete from './components/autocomplete.vue';

    export default {
        components: { AutoComplete },
        data() {
            return {
                artists: new Artists(),
                employees: new Employees(),
                filteredEmployees: [],
                filteredArtists: []
            }
        },
        methods: {
            filterEmployee(str) {
                this.filteredEmployees = this.employees.getByText(str)
            },
            filterArtist(str) {
                this.filteredArtists = this.artists.getByText(str)
            }
        }
    }
</script>
