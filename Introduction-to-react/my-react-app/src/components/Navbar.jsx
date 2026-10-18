import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({logoText,color,items}) => {
  return (
    <div className="nav">
        <div className="logo" style={{backgroundColor: color}}> {logoText} </div>
        <ul>
            {items.map((item,index) =>{
                return <Link to={`/${item.toLowerCase().replace(" ","-")}`}><li key={index} >{item}</li></Link>
            })}
        </ul>
    </div>
  )
}

export default Navbar