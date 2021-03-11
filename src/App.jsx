import React, { Component } from 'react';
import './App.scss';
import meals from './meals.json';
import MealBox from './Components/MealBox';
import AddNewMeal from './Components/AddNewMeal';
import Search from './Components/Search';

class App extends Component {
  state = {
    meals: meals,
    addNewMealIsClicked: false,
    searchQuery: ''
    //name: '',
    //calories: '',
    //image: '',
    //quantity: ''

    // key: Math.random().toString()
  };
  // state = {
  //   image: 'https://i.imgur.com/eTmWoAN.png',
  //   name: 'pizza',
  //   calories: '400',
  //   quantity: '1'
  // };

  handleMealAddition = (meal) => {
    this.setState({
      meals: [meal, ...this.state.meals],
      addNewMealIsClicked: false
    });
  };

  openAddNewMealForm = () => {
    this.setState({
      addNewMealIsClicked: true
    });
  };

  handleQueryChange = (query) => {
    this.setState({
      searchQuery: query
    });
  };

  render() {
    return (
      <div className="container">
        <p>Iron Nutrition</p>
        <Search
          query={this.state.searchQuery}
          onQueryChange={this.handleQueryChange}
        />
        {(this.state.addNewMealIsClicked && (
          <AddNewMeal onAddNewMeal={this.handleMealAddition} />
        )) || <button onClick={this.openAddNewMealForm}>Add New Meal</button>}
        {/* <AddNewMeal onAddNewMeal={this.handleMealAddition} /> */}
        {this.state.meals
          .filter((meal) => {
            if (!this.state.searchQuery) {
              return true;
            } else {
              return meal.name
                .toLowerCase()
                .startsWith(this.state.searchQuery.toLowerCase());
            }
          })

          .map((meal) => (
            <MealBox
              key={Math.random().toString()}
              //{...meal}
              //meal={meal}
              name={meal.name}
              calories={meal.calories}
              image={meal.image}
              quantity={meal.quantity}
              // name = {this.state.name}
              // calories={this.state.calories}
              // image={this.state.image}
              // quantity={this.state.quantity}
            />
          ))}
      </div>
    );
  }
}

export default App;
