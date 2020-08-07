import React from 'react'

import './style.css';
export default ({ showModal, name, image, types}) => {

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
                    <h3 className="subtitulo">{name}</h3>
                    <img src={image} alt="" />
                    <p>{types}</p>
                </div>
            </div>
        </>
    )
}
