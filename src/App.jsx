import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this); //to work setState properly 
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ kitties: users }));
  }
  // //Or make this a arrow function
  // handleChange(e) {
  //   this.setState({searchField:e.target.value});
  // }
  handleChange = e => this.setState({searchField:e.target.value})
  render() {
    const { kitties, searchField } = this.state;
    const filterdKitties = kitties.filter(kitty => 
      kitty.name.toLowerCase().includes(searchField.toLowerCase())
    ); 
    return (
      <div className="App">
      <h1>Kitties</h1>
       <SearchBox
         placeholder='search kitties'
         handleChange = {this.handleChange}
       />
        <CardList kitties={filterdKitties}></CardList>
      </div>
    );
  }
}
export default App;
