import data from '../data/employees';

export default class Employees {
    constructor() {
        this.elements = [];
    }

    getByText(text) {
        text = text.toUpperCase();

        this.elements = [];

        if (!text.length) {
            return;
        }

        this.elements = data.filter((element) => {
            return element.toUpperCase().indexOf(text) > -1;
        })
    }
}