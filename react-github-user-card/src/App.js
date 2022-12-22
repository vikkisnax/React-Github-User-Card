import React from "react";
import Card from "./Components/Card"
import './App.css';


//step 1: import, basic outline, console.logs

class App extends React.Component {
    // don't need constructor
    // step 2: state
    state = {
      card: []
    };
  
  //fetch data here - promises (.then .catch)
  //step 3: CDM and fetch data
  componentDidMount() {
    fetch("https://api.github.com/users/vikkisnax/following")
    .then((res) => 
      // console.log(res) //comment out - need to use .json to return it as json for format as json
      res.json()
    )
    //step 3a: add data to (the currently empty []) 'card' state with setState. the array of objects of who you're following should appear in console.
    .then((cardInfo) => {
      this.setState({ 
         card: cardInfo
      });
      console.log(cardInfo)
    })
    .catch((err) => console.log("error!!")); 
    
    //check to see when App mounts and to check if state is updated
    console.log("App: Component is mounted.");
    console.log("og state:", this.state.card)
  }

  render(){
    console.log("Return is here")
    return (
      <div className="App">
        {/* step 4: passing state to child Component so I can .map there */}
        <Card card={this.state.card}/>
      </div>
    ); 
  }
}

export default App;
