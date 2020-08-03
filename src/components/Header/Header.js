import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './style.css'

class Header extends Component {

    constructor() {
        super()

        this.state = {
            user: ''
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <ul className='nav_links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/catalogos'>Catálogos</Link>
                        </li>
                        <li>
                            <Link to='/movimientos'>Movimientos</Link>
                        </li>
                        <li>
                            <Link to='/reportes'>Reportes</Link>
                        </li>
                        <li>
                            <Link to='/visualisacion'>Visualización</Link>
                        </li>
                        <li>
                            <Link to='/perfil'>Perfil</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header