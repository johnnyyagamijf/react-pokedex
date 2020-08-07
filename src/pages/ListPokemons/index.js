import React from 'react';


import './style.css';
import listColors from '../../services/index.json';
import Modal from '../../componentes/Modal';


function ListPokemons({ pokemon }) {
    const [modalShow, setModalShow] = React.useState(false);
    const { id, name, types } = pokemon;
    const elementsTypes = types.map(typeInfo => typeInfo.type.name);
    const colors = getColorsForType(elementsTypes);


    function getColorsForType(elementsTypes) {
        let colorsw = [];

        for (let index = 0; index < elementsTypes.length; index++) {
            colorsw.push(listColors.typesAndColor[elementsTypes[index]])
        }

        return (colorsw.length > 1) ? colorsw.join(',') : `white, ${colorsw[0]}`;
    }
    return (
        <>
        
            <li className={`card `} style={{ background: `linear-gradient(to right, ${colors})` }} onClick={()=> setModalShow(true)} >
                <img className="card-image" alt={name} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
                <h2 className="card-title">{id}. {name}</h2>
                <p className="card-subtitle">{elementsTypes.join(' | ')}</p>
            </li>

            {
                modalShow && (
                    <Modal showModal={setModalShow}
                    name={name} 
                    image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    types={elementsTypes.join(' | ')}
                     />
                    )
            }
            </>
    )
}

export default ListPokemons;