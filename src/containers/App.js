import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons.js";
import Cocktpit from "../components/Cockpit/Cockpit.js";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "ferg", name: "Max", age: 40 },
      { id: "hu", name: "Manu", age: 29 },
      { id: "fhy", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  //componentWillMount() {
  //  console.log("[App.js] componentWillMount");
  //}

  componentDidMount() {
    console.log(" [App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');  
  }

  switchNameHandler = (newName) => {
    //console.log("Was Clicked");
    // DON´T DO THIS: this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    //Alternativa que funciona, aunque uti el spread operador de arriba
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    //let btnClass = "Button";

    /* const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        //Utilizando Radium
        backgroundColor: "lightgreen",
        color: "black",
      }, 
    };*/

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    //btnClass = classes.red;

    /* style.backgroundColor = "red";
      style[":hover"] = {
        //Utilizando Radium
        backgroundColor: "grey",
        color: "black",
      }; */

    //let classes = ["red", "bold"].join(" ");

    return (
      <div className={classes.App}>
        <Cocktpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons} 
      </div>
    );
  }
}
//<input type="text" onChange={""} />

export default App;


/////////////////////////////////////////////////////////////////////
//Homework
/* class App extends Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1); // Elimina 1 elem del Array
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays</p>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
} */
/////////////////////////////////////////////////////////////////////

//Haciendo cambios en las personas en el render()
/*<Person
  name={this.state.persons[0].name}
  age={this.state.persons[0].age}
/>
<Person
  name={this.state.persons[1].name}
  age={this.state.persons[1].age}
  click={this.switchNameHandler.bind(this, "Max!")}
  changed={this.nameChangedHandler}
>
  My Hobbies: Painting, reading, gaming
</Person>
<Person
  name={this.state.persons[2].name}
  age={this.state.persons[2].age}
/>{" "}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Aquí utilizamos clases, lo cual importaremos( { Component } ), se usa state, render , setState
/* class App extends Component {
  state = {
    username: "superyam",
  };

  //Se uti setState para manipular propiedades de la clase principal
  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Maxi" />
        <UserOutput userName="Maxe" />
      </div>
    );
  }
} */

//Código para utilizar Hooks, se debe importar( { useState } )

//const App = (props) => {
//const [personsState, setPersonsState] = useState({
//    persons: [
//      { name: "Max", age: 28 },
//      { name: "Yami", age: 23 },
//      { name: "Potter", age: 20 },
//    ],
//    otherState: "some other value",
//  });
//
//  const [otherState, setOtherState] = useState("some other value");

//  console.log(personsState, otherState);

//  const switchNameHandler = (newName) => {
//console.log("Was Clicked");
// DON´T DO THIS: this.state.persons[0].name = "Maximilian";
//    setPersonsState({
//      persons: [
//        { name: newName, age: 28 },
//        { name: "Yamirovinci", age: 23 },
//        { name: "Potter", age: 25 },
//      ],
//    });
//  };

//  const nameChangedHandler = (event) => {
//    setPersonsState({
//      persons: [
//        { name: "Max", age: 28 },
//        { name: event.target.value, age: 23 },
//        { name: "Potter", age: 25 },
//      ],
//    });
//  };

//  const style = {
//    backgroundColor: "white",
//    font: "inherit",
//    border: "1px solid blue",
//    padding: "8px",
//    cursor: "pointer",
//  };

//<button onClick={switchNameHandler.bind(setPersonsState, "Maximilian")}></button> Aquí tenemos una función anónima, en este caso es Menos efectivo
//  return (
//    <div className="App">
//      <h1>Hi! Im a react app!</h1>
//      <p>This is really working!!!</p>
//      <button style={style} onClick={() => switchNameHandler("Maximilian!!!")}>
//        Switch Name
//      </button>
//      <Person
//        name={personsState.persons[0].name}
//        age={personsState.persons[0].age}
//      />
//      <Person
//        name={personsState.persons[1].name}
//        age={personsState.persons[1].age}
//        click={switchNameHandler.bind(setPersonsState, "Max!")}
//        changed={nameChangedHandler}
//      >
//        My Hobbies: Painting, reading, gaming
//      </Person>
//      <Person
//        name={personsState.persons[2].name}
//        age={personsState.persons[2].age}
//      />

//      <UserInput></UserInput>
//      <UserOutput userName="Max" />
//      <UserOutput userName="Maxi" />
//      <UserOutput userName="Maxe" />
//    </div>
//  );
//};

//return React.createElement(
//  "div",
//  { className: "App" },
//  React.createElement("h1", null, "Does this work now?")
//);

// OTRA FORMA DE TRABAJAR
//state = {
//  persons: [
//    { name: "Max", age: 28 },
//    { name: "Yami", age: 23 },
//    { name: "Potter", age: 20 },
//  ],
//  otherState: "some other value",
//};

//switchNameHandler = () => {
//console.log("Was Clicked");
// DON´T DO THIS: this.state.persons[0].name = "Maximilian";
//  this.setState({
//    persons: [
//      { name: "Maximilian", age: 28 },
//      { name: "Yamirovinci", age: 23 },
//      { name: "Potter", age: 25 },
//    ],
//  });
