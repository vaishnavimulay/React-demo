import React, {useState} from 'react'

export default function Textfile(props) {
    const handelOnChange = (event) =>{
        setText(event.target.value);
    }

    const handelUpperCase = () =>{
        if(text.trim()){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to uppercase.','success');
        }else{
            props.showAlert('Enter some text.','danger');
        }
    }

    const handelLowerCase = () =>{
        if(text.trim()){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to lowercase.','success');
        }else{
            props.showAlert('Enter some text.','danger');
        }
    }

    const handelCapitalize = () =>{
        if(text.trim()){
            let newText = text.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
            setText(newText);
            props.showAlert('Converted to capitalize word.','success');
        }else{
            props.showAlert('Enter some text.','danger');
        }
    }

    const handelClearText = () =>{
        setText('');
        props.showAlert('Cleared text successfully.','success');
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.title}</h1>
                <div className='mb-3'>
                    <textarea className='form-control' style={{background:props.mode === 'dark' ? 'gray' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}} value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-1' onClick={handelCapitalize}>Convert to Capitalize</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handelUpperCase}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handelLowerCase}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handelClearText}>Clear Text</button>
            </div>
        </>
        
    )
}