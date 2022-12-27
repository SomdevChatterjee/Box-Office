import React from 'react'
import { Link } from 'react-router-dom'

const LINK = [
    {
        'to':'/','text':'Home'
    },
    {
        'to':'/starred',text'
    }
];

const Navs = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/starred">Go to starred Page</Link>
                </li>
            </ul>
        </div>
  )
}

export default Navs
