import React from 'react'
import { Link } from 'react-router-dom'

export const Shelves = () => {
    return (
        <div>
            <Link to="/search">
                <button>search</button>
            </Link>
        </div>
    )
}
