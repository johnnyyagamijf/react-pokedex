import React, {useEffect} from 'react'

import './style.css';

export default ({ showModal, name, image, types, moves, weight, height, background, pageY}) => {

    useEffect(() => {
        console.log('posição modal', pageY)
    }, [])

    function handleCloseModal(e) {
        if (e.target.id === "fechar" || e.target.id === "container") {
            showModal(false)
        }
    }
    return (
        <div className="modal-container" id="container" onClick={handleCloseModal}>
            <div className="modal" style={{ background: background, marginTop: `${pageY -100}px` }}>
                <button className="fechar" id="fechar" onClick={handleCloseModal}>x</button>
                <img className="detalhes" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon_logo" />
                <h3 className="subtitulo">{name}</h3>
                <img className="avatar" src={image} alt="" />
                <div className="dados">
                    <p>Skills: {moves}</p>
                    <p>Weight: {weight / 10}kg</p>
                    <p>Height: {height / 10}m</p>
                </div>
            </div>
        </div>
    )
}
