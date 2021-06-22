import React from "react";
import Fetchuser from "./Fetchuser";
import ShowUser from "./ShowUser";

class App extends React.Component {

  // SÄTTER STATE INITIALT TILL NONE FÖR ATT KUNNA KOLLA OM DATA ÄR KLAR
  state = {
    user: "none",
  }

  callback = (data) => {
    this.setState({user: data});
  }

 render() {

  // I RETURN SÅ KOLLAR VI MED EN ONE-LINE-IF IFALL DATA ÄR HÄMTAT;
  // OM INTE HÄMTA DATA MED FETCH KOMPONENTEN, ANNARS VISA KOMPONENTEN SOM BEHÖVER DATA

    return (
      <div className="container">
        <h1>Random user</h1>
        {(this.state.user === "none") ? <Fetchuser cb={this.callback}/> : <ShowUser user={this.state.user}/>} 
          
      </div>

    )
  }
}

export default App;