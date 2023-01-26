const User = (props) => {
    return (
        <div className="user">
            <img src={props.user.avatar} alt={props.user.avatar === null ? '' : `Avatar of ${props.user.name}`} className='image ' />
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