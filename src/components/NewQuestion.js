import { useState } from "react";
import {handleAddQuestion} from '../actions/questions';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

const NewQuestion = (props) => {

    const[optionOneText,setOptionOneText] = useState('');
    const[optionTwoText,setOptionTwoText] = useState('');

    const navigate = useNavigate();

    const addFirstQuestion = (e) => {
        setOptionOneText(e.target.value.trim());
    }
    const addSecondQuestion = (e) => {
        setOptionTwoText(e.target.value.trim());
    }

    const onAddQestion = (e) => {
        e.preventDefault();
        props.dispatch(handleAddQuestion({optionOneText,optionTwoText}));
        navigate('/');
    }

    return (
        <div>
            <h2 className="new-ques-heading">Create New Poll / Add New Question</h2>
            <div className="new-ques-form">
                <h4 className="inner-heading">Woukd You Rather...?</h4>
                <div className="input-fiels">
                    <input type='text' value={optionOneText} placeholder="Enter First Question" onChange={(e) => addFirstQuestion(e)} className="input"/>
                    <input type='text' value={optionTwoText} placeholder="Enter Second Question" onChange={(e) => addSecondQuestion(e)} className="input"/>
                    <button disabled={optionOneText === '' && optionTwoText === ''} type='button' onClick={(e) => onAddQestion(e)} className="add-question">Add Question</button>
                </div>
            </div>
        </div>
    )
}

export default connect()(NewQuestion);