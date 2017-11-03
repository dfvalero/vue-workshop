import Person from './person';
import data from '../data/employees';

export default class Employees extends Person{
    constructor() {
        super();
        this.elements = data;
    }
}
