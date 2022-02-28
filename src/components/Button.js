import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    renderText(text){
        const x =  text === 'english' ? 'Submit' : 'Voorleggen';
        return x;
    }
    render(){
       return (
           <ColorContext.Consumer>
           {(color) =>(
            <LanguageContext.Consumer>
            {(text) => (
            <button className={`ui button ${color}`}>{this.renderText(text)}</button>)}
             </LanguageContext.Consumer>)}
           </ColorContext.Consumer>
        
       )
    }
}

export default Button;