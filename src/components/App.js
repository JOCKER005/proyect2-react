import Nav from "./nav"
import Foo from "./footer";
import Body from "./body";
import { Component } from "react"
// import { Switch, Route } from "react-router-dom"


class App extends Component {
  constructor(){
    super();
    this.state = {
      main: false,
      movies: []
    }
  }
  render() {
    return (
        <>
          <Nav/>
          <Body/>
          <Foo/>
        </>
    )
  }
}

export default App;
