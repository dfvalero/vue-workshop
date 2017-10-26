<style lang="scss">
    .autocomplete {
        padding: 10px;
    }

    .autocomplete__input {
        border: 1px solid black;
        padding: 5px 10px;


    }
    .autocomplete__input:focus {
        outline: none;
    }

    .autocomplete__list {
        border: 1px solid red;
    }
</style>

<template>
    <div class="autocomplete">
        <input class="autocomplete__input" type="text" @keyup="onKeyUp">
        <ul class="autocomplete__list" v-if="hasCoincidences">
            <li v-for="element in list.elements">{{element}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            list: Object
        },
        methods: {
            onKeyUp(e) {
                this.list.getByText(e.target.value);
            }
        },
        computed: {
            hasCoincidences() {
                return this.list.elements.length;
            }
        }
    }
</script>