import React from 'react';

import './style.css';
import listColors from '../../services/index.json';


function ListPokemons({ pokemon }) {
    const { id, name, types } = pokemon;
    const elementsTypes = types.map(typeInfo => typeInfo.type.name);
    const colors = getColorsForType(elementsTypes)

    function getColorsForType(elementsTypes) {
        let colorsw = [];
        let colorStyle = elementsTypes.join(',');

        for (let index = 0; index < elementsTypes.length; index++) {
            colorsw.push(listColors.typesAndColor[elementsTypes[index]])
        }

        return (colorsw.length > 1) ? colorsw.join(',') : 'white' + ', ' + colorsw[0];
    }

    return (
            <li className={`card `} style={{ background: `linear-gradient(to right, ${colors})` }}>
                <img className="card-image" alt={name} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
                <h2 className="card-title">{id}. {name}</h2>
                <p className="card-subtitle">{elementsTypes.join(' | ')}</p>
            </li>
    )
}

export default ListPokemons;