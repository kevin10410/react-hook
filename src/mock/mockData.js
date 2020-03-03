class MockIngredients {
  constructor() {
    this.ingredients = [
      {
        id: 0,
        name: 'apple',
        amount: 5,
      },
      {
        id: 1,
        name: 'banana',
        amount: 10,
      },
    ];
    this.lastIngredient = null;
  };

  getIngredients = () => this.ingredients;

  getLastIngredient = () => this.lastIngredient;

  addIngredient = ingredient => {
    this.ingredients.push({
      ...ingredient,
      id: this.ingredients.length,
    });
    this.updateLastIngredient();
  };

  updateLastIngredient = () => {
    const lastIngredient = this.ingredients[this.ingredients.length - 1];

    this.lastIngredient = {
      ...lastIngredient,
    };
  };

  deleteIngredient = id => {
    this.ingredients.splice(id, 1);
    this.refineIngredientsId();
  };

  refineIngredientsId = () => {
    this.ingredients
    .forEach((ingredient, index) => {
      ingredient.id = index;
    });
  };
};

export default new MockIngredients();
