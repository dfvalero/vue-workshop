<template>
    <div class="app">
        <auto-complete :list="employees"></auto-complete>
        <auto-complete :list="artists"></auto-complete>
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
                employees: new Employees()
            }
        }
    }
</script>