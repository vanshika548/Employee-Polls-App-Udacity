const User = (props) => {
    console.log("users",props.user)
    return (
        <div className="user">
            <img src={props.user.avatar} className='image'/>
            <div className="user-info">
                <span className="data"><strong>{props.user.name}</strong></span>
                <span className="data">Questions Answered : {props.user.answerCount}</span>
                <span className="data">Questions Asked : {props.user.questionCount}</span>
                <span className="data">Total Score Of <strong>{props.user.name}</strong> is <strong>{props.user.totalScore}</strong></span>
            </div>
        </div>
    )
}

export default User;