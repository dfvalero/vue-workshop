import $ from 'jquery';
import data from './data/employees';

import 'normalize.css';
import './scss/_legacy.scss';

let $list;

function fillList(value = '') {
    let coincidences;

    $list.empty();

    if(!value.length) {
        return;
    }

    coincidences = data.filter((element) => {
        return element.toUpperCase().indexOf(value) > -1;
    });

    coincidences.map((coincidence) => {
        $('<li>').text(coincidence).appendTo($list);
    });
}

$(document).ready(function() {
    let $autocomplete = $('#autocomplete');
    let $input = $autocomplete.find('input');

    $list = $autocomplete.find('ul');

    $input.on('keyup', (e) => {
         fillList(e.target.value.toUpperCase());
    });
});