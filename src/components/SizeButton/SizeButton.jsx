import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addSize } from '../../actions/actions'

import './SizeButton.css'

const SizeButton = ({ size, have }) => {
    const [ isSelected, setIsSelected] = useState(false)
    const { sizeSelected } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleClick = () => {
        if (isSelected === false) {
            setIsSelected(!isSelected)
        }

        dispatch(addSize(size))
    }
    
    return (
        have ?
        <button  
            className={`item__button ${sizeSelected===size ? "item__button--selected" : ""}`}
            onClick={handleClick}
        >
            {size}
        </button>

        /* a classe não estava funcionando aqui mesmo colocando "tudo" numa 
        div por isso alterei no css o "button" */
        : <button>{size}</button>
    )
}

export default SizeButton;