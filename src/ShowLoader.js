import React from 'react';
import Loader from './loader.gif';
 
class ShowLoader extends React.Component {
    render() {
        return (
            <img src={Loader} alt="Loader"/>
       );            
    }
}
 
export default ShowLoader;