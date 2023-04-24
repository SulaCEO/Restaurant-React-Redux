import React from "react";
import {FiSearch} from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../../redux/reducers/homeReducer";
import contacticon from './../../assets/header__contact-icon.svg';
import locaticon from './../../assets/header__location-icon.svg';
import login from './../../assets/header__login-icon.svg';

const Header = ()=>{
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.homeReducer);

    return(
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <h1><a href="/">LOGOS</a></h1>
                </div>
                <div className="header__delivery">
                    <span className="header__delivery-locicon"><img src={locaticon} alt="" /></span>
                    <input className="header__delivery-field" placeholder="Введите адрес доставки" type="text" />
                    <span className="header__delivery-search"><FiSearch/></span>
                </div>
                <div className="header__contact">
                    <div className="header__contact-icon">
                        <img src={contacticon} alt="" />
                    </div>
                    <div className="header__contact-text">
                        <span>Контакты:</span>
                        <a href="tel: +79175105759">+7 (917) 510-57-59</a>
                    </div>
                </div>
                <div className="header__login">
                    <img className="header__login-icon" src={login} alt="" />
                    {user.email.length ? <span onClick={()=>dispatch(resetUser())} className="header__login-btn">Выйти</span> : <Link className="header__login-btn" to='/register'>Войти</Link>}
                </div>
                <div className="header__bag">
                    <button className="header__bag-btn" type="button">
                        Корзина
                        <span></span>
                        <div className="header__bag-count">4</div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;