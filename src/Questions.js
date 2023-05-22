import React , {useState} from 'react';
import {FaPlus,FaMinus} from "react-icons/fa"

function Questions({title,info}) {

    const [showAnswer,setShowAnswer]=useState(false)
    return (
        <article className="article">
            <div className="question">
            <h4 className="question-title">{title}</h4>
            <button className="icon-btn" onClick={()=>setShowAnswer(!showAnswer)}>
                {
                    showAnswer ? <FaMinus /> : <FaPlus />
                }
            </button>
            </div>
            {
                showAnswer && <p className="answer">{info}</p>
            }
        </article>
    )
}

export default Questions;
