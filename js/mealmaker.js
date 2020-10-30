const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizersIn){
    this._coursers.appetizers = appetizersIn;
  },
  set mains(mainsIn){
    this._coursers.mains = mainsIn;
  },
  set desserts(dessertsIn){
    this._coursers.desserts = dessertsIn;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('main');
    const dessert = this.getRandomDishFromCourse('dessert');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} - The price is ${totalPrice}`;
  },
};

//adicionar os pratos no objeto
menu.addDishToCourse('appetizers','salad', 4.00);
menu.addDishToCourse('appetizers','wings', 1.00);
menu.addDishToCourse('appetizers','fries', 5.00);
menu.addDishToCourse('mains','rice', 1.00);
menu.addDishToCourse('mains','beans', 2.00);
menu.addDishToCourse('mains','beef', 3.00);
menu.addDishToCourse('dessert','icecream', 6.00);
menu.addDishToCourse('dessert','cake', 7.00);
menu.addDishToCourse('dessert','jam', 8.00);


const meal = menu.generateRandomMeal();
console.log(meal);