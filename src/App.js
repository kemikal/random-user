import React from "react";
import ShowLoader from "./ShowLoader";
import ShowUser from "./ShowUser";
import GetUser from "./GetUser";

class App extends React.Component {

  // SÄTTER STATE INITIALT TILL NONE FÖR ATT KUNNA KOLLA OM DATA ÄR KLAR
  state = {
    user: "none",
  }

  componentDidMount = () => {
    GetUser((data) => {
      this.setState({user: data});
    });
  }

 render() {

  // I RETURN SÅ KOLLAR VI MED EN ONE-LINE-IF IFALL DATA ÄR HÄMTAT;
  // OM INTE HÄMTA DATA MED FETCH KOMPONENTEN, ANNARS VISA KOMPONENTEN SOM BEHÖVER DATA

    return (
      <div className="container">
        <h1>Random user</h1>
        {(this.state.user === "none") ? <ShowLoader user={this.state.user}/> : <ShowUser user={this.state.user}/>}      
      </div>

    )
  }
}

export default App;