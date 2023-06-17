import React, { useContext } from 'react'
import { books } from './MockData'
import "./search.css"
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

export const Search = () => {
    const { handleDropedown, dispatch, state } = useContext(DataContext)
    const handleSearchChange = (e) => {
        dispatch({ type: "SERCH_PRODUCT", payload: e.target.value })
    }

    const renderData = () => {
        let filteredData = [...books]
        if (state.searchValue) {
            filteredData = filteredData.filter((product) => product.title.toLowerCase().includes(state.searchValue.toLowerCase()))
        }
        return filteredData;
    }
    return (
        <div className='container-main'>

            <div className='search-bar'>
                <Link to="/"><button>home</button></Link>
                <input type='search' onChange={handleSearchChange} />
            </div>
            <div className='container-book'>
                {renderData()?.map((item) => {
                    const { id, title, img, author } = item
                    return <div key={id} className='books-list'>
                        <img src={img} alt="books" />
                        <p>{title}</p>
                        <p>{author}</p>
                        <select onClick={() => handleDropedown(item)}>
                            <option > move to..</option>
                            <option value="currentlyReading">currently Reading</option>
                            <option value="WantToRead">Want to Read</option>
                            <option value="Read">Read</option>
                        </select>
                    </div>
                })}
            </div>
        </div>
    )
}
