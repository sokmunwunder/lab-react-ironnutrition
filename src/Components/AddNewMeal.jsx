import React from 'react';

class AddNewMeal extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: ''
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    //const {name, calories, image} = this.state;
    const name = this.state.name;
    const calories = this.state.calories;
    const image = this.state.image;
    //const meal = { name, calories, image };

    const meal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };

    this.props.onAddNewMeal(meal);

    // this.setState({
    //   meal: '',
    //   meals: [...meals, meal]
    // });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name of meal"
          id="name-input"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
          // onChange={this.handleNewMealChange}
          // value={this.state.newMeal}
        />
        <label htmlFor="calories-input">Calories: </label>
        <input
          type="number"
          name="calories"
          placeholder="Calories of meal"
          id="calories-input"
          required
          value={this.state.calories}
          onChange={this.handleInputChange}
          // onChange={this.handleNewMealChange}
          // value={this.state.newMeal}
        />
        <label htmlFor="image-input">Image:</label>
        <input
          type="url"
          name="image"
          placeholder="Image of meal"
          id="image-input"
          required
          value={this.state.image}
          onChange={this.handleInputChange}
          // onChange={this.handleNewMealChange}
          // value={this.state.newMeal}
        />
        <button>Add New Meal</button>
      </form>
    );
  }
}

// class AddNewMeal extends React.Component {
//   state = {
//     name: '',
//     calories: 0,
//     image: ''
//   };

//   handleFormSubmission = (event) => {
//     event.preventDefault();
//     const content = this.state.newMeal;
//     if (content) {
//       const meal = {
//         id: Math.random().toString(),
//         content: content
//       };
//       this.setState({
//         newMeal: ''
//       });
//       this.props.onMealCreate(meal);
//     }
//   };

// handleNewMealChange = (event) => {
//   const value = event.target.value;
//   this.setState({
//     newTask: value
//   });
// };

// render() {
//   return (
//     <form onSubmit={this.handleFormSubmission}>
{
  /* <label htmlFor="name-input">Name of Meal</label>
        <input
          type="text"
          name="name"
          placeholder="Name of meal..."
          id="name-input"
          onChange={this.handleNewMealChange}
          value={this.state.newMeal}
        /> */
}
{
  /* <button onClick={<AddForm />}>Add new meals</button>
      </form>
    );
  }
} */
}

export default AddNewMeal;
