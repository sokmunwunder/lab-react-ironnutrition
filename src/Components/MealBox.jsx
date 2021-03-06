import React from 'react';

class MealBox extends React.Component {
  render() {
    const { image, name, calories, quantity } = this.props;
    return (
      <div class="media">
        <img
          src={image}
          class="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div class="media-body align-self-center">
          <h5 class="mt-0 mb-1">{name}</h5>
          <small>{calories}</small>
        </div>
        <form class="row align-self-center">
          <input class="form-control col-9" type="number" value={quantity} />
          <button class="btn btn-primary col-3">+</button>
        </form>
      </div>

      //   <div class="media">
      //     <img
      //       src="https://i.imgur.com/eTmWoAN.png"
      //       class="img-thumbnail mr-3 mw-25 border-0"
      //       style={{ maxWidth: '10em' }}
      //     />
      //     <div class="media-body align-self-center">
      //       <h5 class="mt-0 mb-1">Pizza</h5>
      //       <small>400 cal</small>
      //     </div>
      //     <form class="row align-self-center">
      //       <input class="form-control col-9" type="number" value="1" />
      //       <button class="btn btn-primary col-3">+</button>
      //     </form>
      //   </div>
    );
  }
}

export default MealBox;
