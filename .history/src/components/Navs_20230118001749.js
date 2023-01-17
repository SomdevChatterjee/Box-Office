import React from 'react'
import { Link } from 'react-router-dom'
import { NavList } from './Navs.styled';

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
            <NavList>
                {
                    LINKS.map(({to, text}) => (
                        <li key={to}>
                                <Link to={to}>{text}</Link>
                        </li>
                    ))
                }
            </NavList>
        </div>
  )
}

export default Navs
