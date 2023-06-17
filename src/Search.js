import React, { useContext } from 'react'
import { books } from './MockData'
import "./search.css"
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

export const Search = () => {

    const { handleDropedown } = useContext(DataContext)
    return (
        <div className='container-main'>

            <div className='search-bar'>
                <Link to="/"><button>home</button></Link>
                <input type='search' />
            </div>
            <div className='container-book'>
                {books?.map((item) => {
                    const { id, title, img, author } = item
                    return <div key={id} className='books-list'>
                        <img src={img} alt="books" />
                        <p>{title}</p>
                        <p>{author}</p>
                        <select onClick={() => handleDropedown(item)}>
                            <option > move to..</option>
                            <option >currently Reading</option>
                            <option>Want to Read</option>
                            <option>Read</option>
                        </select>
                    </div>
                })}
            </div>
        </div>
    )
}
