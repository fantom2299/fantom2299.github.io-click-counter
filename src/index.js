import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Click() {

    let [ number, setNumber ] = useState (0)
    function Press() {
        setNumber( number + 1 );
    }

    return (
        <div id="click-container">
            <div id="container">{ number }</div>
            <div id="button-container">
                <Button className="button-like" text={'Like'} bgColor={'green'} onClick={ Press } />
            </div>
        </div>
    );

}




function Button(props) {
    let { text, bgColor, onClick } = props;

    return (
        <button
            className="button"
            style={{ backgroundColor: bgColor }}
            onClick={ onClick }
        >
            { text }
        </button>
    )
}









ReactDOM.render(
  <React.StrictMode>
    <Click />
  </React.StrictMode>,
  document.getElementById('root')
);


