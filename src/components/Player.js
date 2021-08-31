import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import './Player.css'
import Footer from './Footer'
const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player_body">
            {/*SideBar */}
                <Sidebar/>
                <Body spotify={spotify}/>
            {/*Body */}
            </div>
            {/*Footer */}
            <Footer/>
        </div>
    )
}

export default Player
