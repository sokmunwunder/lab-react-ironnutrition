import React, { Component } from 'react';
import './App.scss';
import meals from './meals.json';
import MealBox from './Components/MealBox';

class App extends Component {
  state = {
    image: 'https://i.imgur.com/eTmWoAN.png',
    name: 'pizza',
    calories: '400',
    quantity: '1'
  };

  // addMeal = () => {
  //   const singleMeal = meals.map((meal) => return
  //   <img />);
  // };

  render() {
    return (
      <div>
        <p>Sample App</p>
        <MealBox
          name={this.state.name}
          calories={this.state.calories}
          image={this.state.image}
          quantity={this.state.quantity}
        />
      </div>
    );
  }
}

export default App;
