import Person from './person';
import data from '../data/artists';

export default class Artists extends Person {
    constructor() {
        super();
        this.elements = data;
    }
}
