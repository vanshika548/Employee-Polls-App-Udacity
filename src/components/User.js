const User = (props) => {
    console.log("users",props.user)
    return (
        <div>
            <img src={props.user.avatar}/>
            <div>
                <span>{props.user.name}</span>
                <span>Questions Answered : {props.user.answerCount}</span>
                <span>Questions Asked : {props.user.questionCount}</span>
                <span>Total Score Of {props.user.name} is {props.user.totalScore}</span>
            </div>
        </div>
    )
}

export default User;