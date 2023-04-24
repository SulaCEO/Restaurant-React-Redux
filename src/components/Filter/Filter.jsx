import React from "react";

const Filter = ()=>{
    return(
        <ul className="filter">
            <div className="container">
                <li className="filter__select active">Холодные закуски</li>
                <li className="filter__select">Горячие закуски</li>
                <li className="filter__select">Мясные блюда</li>
                <li className="filter__select">Супы</li>
                <li className="filter__select">Рыбные блюда</li>
                <li className="filter__select">Гриль меню</li>
                <li className="filter__select">Фирменные блюда</li>
                <li className="filter__select">Напитки</li>
            </div>
        </ul>
    )
}

export default Filter;