import React from 'react'
import { Link } from 'react-router-dom'

const LINK = [
    {
        'to':'/','text':'Home'
    },
    {
        'to':'/starred','text':'Starred'
    }
];

const Navs = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/starred">LINK</Link>
                </li>
            </ul>
        </div>
  )
}

export default Navs
