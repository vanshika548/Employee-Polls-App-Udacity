import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionForm = (props) => {
    console.log("pros form",props);
    let {id} =useParams();
    const navigate = useNavigate();

    const [optionSelected, setOptionselected] = useState('');

    const questionObj = {
        authorId : props.questions[id].author,
        optionOne : props.questions[id].optionOne,
        optionTwo : props.questions[id].optionTwo,
        authorName : props.users[props.questions[id].author].name,
        avatar : props.users[props.questions[id].author].avatarURL
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleAddAnswer({optionSelected,id}));
        navigate(`/question/${id}/result`)
    }

    const handleSelectedValue = (value) => {
        setOptionselected(value.target.defaultValue);
    }

    return (
        <div>
            <h1 className="questiionResult">QuestionForm</h1>
            <div className="ques-res">
            <img src={questionObj.avatar} className='image'/>
                <h3 className="heading-h3">{props.authedUser} asks would you rather...</h3>
                <div className="heading-h3">
                <div>
                    <label>{questionObj.optionOne.text}</label> 
                    <input onChange={handleSelectedValue} selectedvalue={optionSelected} type='radio' value='optionOne'/>
                </div>
                <div>
                    <label>{questionObj.optionTwo.text}</label>
                    <input onChange={handleSelectedValue} selectedvalue={optionSelected} type='radio' value='optionTwo'/>
                </div>
                </div>
                <button type="submit" disabled={optionSelected === ''} onClick={(e) => handleSubmit(e)} className="submitbtn">Submit</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser,users,questions}) => {
    return {
        authedUser,
        users,
        questions
    }
}
export default connect(mapStateToProps)(QuestionForm);