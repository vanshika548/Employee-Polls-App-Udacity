import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageNotFound from "./PageNotFound";

const QuestionForm = (props) => {
    let {id} =useParams();
    const navigate = useNavigate();

    const [optionSelected, setOptionselected] = useState('');
    const [continueRendering, setContinueRendering] = useState(false);

    useEffect(() => {
        if (props.questions[id]) {
            setContinueRendering(true)
        }
    }, [])

    if (!continueRendering) {
        return <PageNotFound />
    }

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
        navigate(`/questions/${id}/result`)
    }

    const handleSelectedValue = (value) => {
        setOptionselected(value.target.defaultValue);
    }

    return (
        <div>
            <h1 className="questiionResult">QuestionForm</h1>
            <div className="ques-res">
            <img src={questionObj.avatar} alt={questionObj.avatar === null ? '' : `Avatar of ${questionObj.authorName}`} className='image'/>
                <h3 className="heading-h3">{props.authedUser} asks would you rather...</h3>
                <div className="heading-h3">
                <div>
                    <label>{questionObj.optionOne.text}</label> 
                    <input onChange={handleSelectedValue} selectedvalue={optionSelected} type='radio' value='optionOne' name="radio-input"/>
                </div>
                <div>
                    <label>{questionObj.optionTwo.text}</label>
                    <input onChange={handleSelectedValue} selectedvalue={optionSelected} type='radio' value='optionTwo' name="radio-input"/>
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