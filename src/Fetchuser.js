import React from 'react';
import Loader from './loader.gif';
 
class Fetchuser extends React.Component {

    componentDidMount = () => {

        // I COMPONENT DID MOUNT KALLAR VI PÅ FETCH FÖR ATT UNDVIKA DUBBLA ANROP
        
        // OBS TIME OUT ENBART FÖR ATT FÖRDRÖJA ANROPET, TA BORT ANNARS!

        setTimeout(() => {
            fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0].name.first);
                this.props.cb(data.results[0].name.first + " " + data.results[0].name.last)
            })
        },2000)
    }

    render() {

        // VISAR EN LOADER I FETCH SOM VISAS TILLS CALLBACK ÄR ANROPAT OCH STATE ÄR UPPDATERAD MED VÅR DATA I APP.JS

        return (
            <img src={Loader} alt="Loader"/>
       );
            
    }
  
}
 
export default Fetchuser;