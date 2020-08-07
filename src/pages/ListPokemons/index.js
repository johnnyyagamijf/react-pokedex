import React from 'react';


import './style.css';
import listColors from '../../services/index.json';
import Modal from '../../componentes/Modal';


function ListPokemons({ pokemon }) {
    const [modalShow, setModalShow] = React.useState(false);
    const { id, name, types, moves, weight, height} = pokemon;
    const elementsTypes = types.map(typeInfo => typeInfo.type.name);
    const elementsmoves = moves.map(move => move.move.name)
    const background = `linear-gradient(to right, ${getColorsForType(elementsTypes)}`;

    console.log('movimentos', elementsmoves)


    function getColorsForType(elementsTypes) {
        let colorsw = [];

        for (let index = 0; index < elementsTypes.length; index++) {
            colorsw.push(listColors.typesAndColor[elementsTypes[index]])
        }

        return (colorsw.length > 1) ? colorsw.join(',') : `white, ${colorsw[0]}`;
    }
    return (
        <>
        
            <li className={`card `} style={{ background: background }} onClick={()=> setModalShow(true)} >
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
                    moves={elementsmoves.join(', ')}
                    weight={weight}
                    height={height}
                    background={background}
                     />
                    )
            }
            </>
    )
}

export default ListPokemons;