import React, { useState } from 'react';
import classes from './search.module.scss';
import iconSearch from '../assets/image/ic_Search.png';
import logo from '../assets/image/Logo_ML.png';
import { NavLink, useNavigate  } from 'react-router-dom';

const Search = () => {
    const [textValue, setTextValue] = useState('');
    let navigate = useNavigate();

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (textValue) {
            navigate(`/items/?search=${textValue}`)
        }
    }

    const handlerKeyPress = (event) => {
        if (event.key === 'Enter') {
            handlerSubmit(event)
        }
    } 
    return (
            
        <div className={classes.header_navbar}>
            <div className={classes.header_search}>
                <div>
                    <NavLink to={'/'}><img className={classes.logo} src={logo} alt="Mercado Libre"/></NavLink>
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