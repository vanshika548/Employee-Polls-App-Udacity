import { NavLink } from "react-router-dom";

const Nav = (props) => {
    console.log("propsnav",props)

    const {currentUser,logout} = props;
    return(
        <div>
            <div>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/add'>ADD NEW QUESTION</NavLink>
                <NavLink to='/leaderboard'>LEADERBOARD</NavLink>
            </div>
            <div>
                <span>Welcome, {currentUser}</span>
                <button onClick={(e)=>logout(e)}>logout</button>
            </div>
        </div>
    )
}

export default Nav;