import React from "react";
import Card from "./Components/Card";
import './App.css';


//step 1: import, basic outline, console.logs

class App extends React.Component {
    // don't need constructor
    // step 2: state
    state = {
      card: [],
      //stretch 1b: add searchUser to state
      searchUser: "vikkisnax"
    };
  
  //fetch data here - promises (.then .catch)
  //step 3: CDM and fetch data
  //stretch 1f I moved the fetch info into fetchUser method then ran it in CDM. passing in searchUser state
  componentDidMount() {
    this.fetchUser(this.state.searchUser);
  }
  
  //this was in CDM but I made it a method 
  fetchUser = (search) => {
  //stretch 1a: make a variable for searched user and edit in link. backticks and ${} initially said 'vikkisnax'
  fetch(`https://api.github.com/users/${search}/following`)
  .then((res) => 
    // console.log(res) //comment out - need to use .json to return it as json for format as json
    res.json()
  )
  //step 3a: add data to (the currently empty []) 'card' state with setState. the array of objects of who you're following should appear in console.
  .then((cardInfo) => {
    this.setState({ 
       card: cardInfo
    });
    // console.log(cardInfo)
  })
  .catch((err) => console.log("error!!")); 
  
  //check to see when App mounts and  to check if state is updated. why is it mounting twice?
  console.log("App: Component is mounted.");
  // console.log("og state:", this.state.card);
};



  // stretch 1d onChange function - update searchUser state with input value
  handleUserChange = (e) => {
    this.setState({
      searchUser: e.target.value
    });
  };

  // stretch 1e - send searchUser state to fetchUser to update link / to show who we looked up
  handleSearch = (e) => {
    e.preventDefault();
    // stretch 1g - putting w/e u typed as user in fechUser
    this.fetchUser(this.state.searchUser);
  } 


  render(){
    console.log("App Return")
    return (
      <div className="App"> 
      {/* stretch 1h.b moved it from Card comp to App so it's above the search bar */}
      <h4>{this.state.searchUser}'s Github Follow List</h4>

        {/* stretch 1c - search - form - input - button*/}
        <form onSubmit={this.handleSearch}>
          <input 
            type= "text" 
            value= {this.state.searchUser}
            onChange= {this.handleUserChange}
          />
        <button>Search User</button>

        </form>

        {/* step 4: passing state to child Component so I can .map there  --- stretch 1h.a pass in searchUser to change title (not using now)*/}
        <Card card={this.state.card} search={this.state.searchUser}/>
      </div>
    ); 
  }
}

export default App;
