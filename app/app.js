import Vue from 'vue';
import Artists from './models/artists';
import Employees from './models/employees';
import AutoComplete from './components/autocomplete.vue';

new Vue({
    el: '#app',
    data: {
        employees: new Employees(),
        artists: new Artists()
    },
    template: `<div><auto-complete :list="employees"></auto-complete>
<auto-complete :list="artists"></auto-complete></div>`,
    components: { AutoComplete },
    methods: {}
});