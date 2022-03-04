import React, { useState } from 'react';
import classes from './Search.module.scss';
import iconSearch from '../../assets/image/ic_Search.png';
import logo from '../../assets/image/Logo_ML.png';
import { useNavigate  } from 'react-router-dom';
/**
 * Search box component  
 * @returns view rendering for the search box
 */
const Search = () => {
    const [textValue, setTextValue] = useState('');
    let navigate = useNavigate();
    /**
     * 
     * @param {*} event Event - behavior of submit functions
     * @function handlerSubmit redirect view if conditional is true
    */
    const handlerSubmit = (event) => {
        event.preventDefault();
        if (textValue) {
            navigate(`/items/?search=${textValue}`)
        }
    }

    /**
     * 
     * @param {*} event Event - behavior of keyPress interactions
     * @function handlerKeyPress control the event key press if conditional is 'Enter'
     */
    const handlerKeyPress = (event) => {
        if (event.key === 'Enter') {
            handlerSubmit(event)
        }
    }
    return (
            
        <div className={classes.header_navbar}>
            <div className={classes.header_search}>
                <div>
                    <a href="/"><img className={classes.logo} src={logo} alt="Mercado Libre"/></a>
                </div>
                <div>
                    <input type="text" className={classes.text} placeholder="Nunca dejes de buscar" 
                        value={textValue} 
                        onChange={(event) => setTextValue(event.target.value)}
                        onKeyPress={(event) => handlerKeyPress(event)}>
                    </input>
                </div>
                <div>
                    <button className={classes.button_search} onClick={handlerSubmit}>
                        <img src={iconSearch} alt="Mercado Libre"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search