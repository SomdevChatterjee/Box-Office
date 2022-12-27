import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
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
                {
                    LINKS.map({to, } => (
                        <li key={items.to}>
                                <Link to={items.to}>{items.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}

export default Navs
