import { useState }from 'react'
import "./Page.css";
const Page =({question, answer}) => {

    const[isOpen, setIsOpen]= useState(false);
  return (
    <div className="item">
        <button className="question" onClick={()=>setIsOpen(!isOpen)}>
            <span><strong>{question}</strong></span>
        <span>{isOpen ? "▲" : "▼"}</span>

        </button>
        {isOpen && (
            <div className="answer">
                <p><strong>Answer : </strong>{answer}</p>
                </div>
        )}
    </div>
  )
}

export default Page