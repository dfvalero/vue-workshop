export default class Person {

    getByText(text = '') {

        if ( ! text.length) {
            return [];
        }

        text = text.toUpperCase();

        return this.elements.filter((element) => {
            return element.toUpperCase().indexOf(text) > -1;
        })
    }
}
