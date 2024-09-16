import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        //console.log("Uppercase was clicked", + text);
        let newText = text.toUpperCase();
        seTtext(newText)
    }
    const handleonChange = (event)=> {
        //console.log("On change");
        seTtext(event.target.value)
    }
  const [text, seTtext] = useState('Enter text');
  return (
    <div> 
            <h1>{props.heading}</h1>
            <div class="mb-3">
            <textarea class="form-control" value={text} onChange={handleonChange}id="My Box" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>

  )
}
