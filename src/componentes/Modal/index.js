import React from 'react'

import './style.css';
export default ({ showModal, name, image, types, moves, weight, height}) => {

    function handleCloseModal(e){
        if(e.target.id === "fechar" || e.target.id ==="container"){
            showModal(false) 
        }
    }
    return (
        <>
            <div className="modal-container" id="container" onClick={handleCloseModal}>
                <div className="modal">
                    <button className="fechar" id="fechar" onClick={handleCloseModal}>x</button>
                    <img className="detalhes" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon_logo"/>
                    <h3 className="subtitulo">{name}</h3>
                    <img className="avatar" src={image} alt="" />
                    <div class="dados">
                        <p>Skills: {moves}</p>
                        <p>Weight: {weight}</p>
                        <p>Height: {height}</p>
                    </div>
                   </div>
            </div>
        </>
    )
}
