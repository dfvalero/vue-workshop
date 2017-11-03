<template>
    <div class="app">
        <auto-complete :list="employees"></auto-complete>
        <auto-complete :list="artists"></auto-complete>
        <auto-complete :list="artists_employees"></auto-complete>
    </div>
</template>

<script>
    import Artists from './models/artists';
    import Employees from './models/employees';
    import ArtistsEmployees from './models/artists_employees'
    import AutoComplete from './components/autocomplete.vue';
    export default {
        components: { AutoComplete },
        data() {
            return {
                artists: new Artists(),
                employees: new Employees(),
                artists_employees: new ArtistsEmployees()
            }
        }
    }
</script>