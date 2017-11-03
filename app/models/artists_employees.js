import artists from '../data/artists';
import employees from '../data/employees';

export default class Artists_Employees {
    constructor() {
        this.elements = [];
    }

    getByText(text) {
        text = text.toUpperCase();

        var artistsEmployees = artists.concat(employees);

        this.elements = [];

        if (!text.length) {
            return;
        }

        this.elements = artistsEmployees.filter((element) => {
            return element.toUpperCase().indexOf(text) > -1;
        })
    }
}