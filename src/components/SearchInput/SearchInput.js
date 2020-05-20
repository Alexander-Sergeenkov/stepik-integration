import React, { useContext, useState } from 'react'
import './SearchInput.sass'
import SearchContext from './../../context/SearchContext'


export default function SearchInput(props) {
    const search = useContext(SearchContext)
    const [searchValue, setSearchValue] = useState('')
    const handleKeyPress = e => {
        if (e.key === "Enter") {
            search.searchForQuestions(searchValue)
            setSearchValue('')
        }
    }
    return (
        <div className="search">
            <p className="search__label">Интересующий вас вопрос</p>
            <div className="search__input-container">
                <input type="text" className="search__input" placeholder="Введите вас вопрос" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyPress={handleKeyPress} />
                <button className="search__button" onClick={(e) => {search.searchForQuestions(searchValue); setSearchValue('')}}>Задать вопрос</button>
            </div>
            {
                props.bottom ? <p className="search__bottom">Система порекомендует вам материалы, чтобы вы нашли ответ на свой  вопрос</p> : null
            }
        </div>
    )
}
