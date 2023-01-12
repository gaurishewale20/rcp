  
import React, { useState } from 'react';
//import { FaArrowCircleUp } from 'react-icons/fa';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import './styles.model.css';

const ScrollToBottom = () =>
{

    const [ showScroll, setShowScroll ] = useState( false )

    const checkScrollBottom = () =>
    {
        if ( !showScroll && window.pageYOffset < 400 )
        {
            setShowScroll( true )
        } else if ( showScroll && window.pageYOffset >= 400 )
        {
            setShowScroll( false )
        }
    };

    const scrollBottom = () =>
    {
        window.scrollTo( {top: document.documentElement.scrollHeight, behavior: 'smooth'});
    };

    window.addEventListener( 'scroll', checkScrollBottom )

    return (
        <div className="scrollBottom" onClick={ scrollBottom } style={ { display: showScroll ? 'flex' : 'none' } } >
            <KeyboardArrowDownIcon />
        </div>
    );
}

export default ScrollToBottom;