import { NavLink } from "react-router-dom";

const Nav = (props) => {

    const {currentUser,logout} = props;
    
    return(
        <div className="disply-flex">
            <div className="link-div">
                <NavLink to='/' className='link'>HOME</NavLink>
                <NavLink to='/add' className='link'>ADD NEW QUESTION</NavLink>
                <NavLink to='/leaderboard' className='link'>LEADERBOARD</NavLink>
            </div>
            <div className="welcome-text">
                <span>Welcome, <strong>{currentUser}</strong></span>
            </div>
            <div>
                <button className="logout-btn" onClick={(e)=>logout(e)}>logout</button>
            </div>
        </div>
    )
}

export default Nav;