{
  //function  learning in ts

  //normal function
  function add(a: number, b: number = 10): number {
    //default parameter
    return a + b;
  }

  // use add
  const sum = add(2, 3);

  //Arrow function
  const addArrow = (a: number, b: number): number => a + b;

  //object --> function --> method

  //its a method
  const poorUser = {
    name: "adnan",
    balance: 1000,
    addBalance(amount: number): string {
      return `My new balance is ${this.balance + amount}  `;
    },
  };

  // Declare an array of numbers from 1 to 10
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Create a new array by squaring each element of the original array
  const newArr: number[] = arr.map((item: number): number => item * item);
}
