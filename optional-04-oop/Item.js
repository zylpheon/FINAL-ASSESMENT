class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    updateDetails(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    displayDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
  }
  
  export default Item;
  