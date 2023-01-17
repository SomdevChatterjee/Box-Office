import React from 'react'
import { Link } from 'react-router-dom'
import { LinkStyled, NavList } from './Navs.styled';

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
                                <LinkStyled to={to}>{item.text}</LinkS>
                        </li>
                    ))
                }
            </NavList>
        </div>
  )
}

export default Navs
