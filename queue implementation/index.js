// the general assumption is that what we are adding to the queues are numbers
class Queue {
  constructor() {
    this.data = [];
  }

  // an additional helper method to check for number. This is based on two conditions. 1- the test case are povided in numbers indicating we are only expecting number and 2. the methods depend on number data type. Ideally typescript will resolve this.
  isNumber(input) {
    if (isNaN(input) === false && typeof input === "number") {
      return true;
    } else {
      // its not a number
      return false;
    }
  }

  add(id) {
    // type checking. I would be probably have used typescript types for this.
    if (this.isNumber(id) === false) return false;

    this.data.unshift(id);
    // reverse logic is applied here
    return this.data.length;
  }

  removeByUser(id) {
    //if queue is empty, no user can be returned... also type checking
    if (this.data.length < 1 || this.isNumber(id) === false) return false;

    //find the user... Here the assumption is that there can be only one unique user.
    const index = this.data.indexOf(id);

    // if no user was found
    if (index === -1) {
      return false;
    } else {
      // remove the user and returns the removed element
      this.data.splice(index, 1)[0];
      // return true to indicate the success
      return true;
    }
  }

  removeByPosition(position) {
    // position adjusted to base zero
    position = position - 1;

    // if queue is empty, There is nothing to remove... type checking too
    if (this.data.length < 1 || this.isNumber(id) === false) return false;
    // -1 was used to adjust it to base zero... && position greater than length is an invalid posiiton
    if (position > this.data.length - 1) return false;

    if (this.data.splice(position, 1).length > 0) {
      // a valid position was provided so return the element from the position
      return true;
    } else {
      //an invalid position was provided
      return false;
    }
  }

  move(fromPosition, toPosition) {
    // the provided position must not exceed the queue
    if (fromPosition > this.data.length || toPosition > this.data.length)
      return false;

    // assuming the validity of both input are guaranteed... the return will be the new queue
    this.data.splice(
      toPosition - 1,
      0,
      this.data.splice(fromPosition - 1, 1)[0]
    );
    return true;
  }

  swap(position1, position2) {
    // checking for invalid position
    if (position1 > this.data.length || position2 > this.data.length)
      return false;

    // else everything looks good and swap can be donw
    const temp = this.data[position1 - 1];
    this.data[position1 - 1] = this.data[position2 - 1];
    this.data[position2 - 1] = temp;
    return true;
  }

  reverse() {
    // :)
    this.data.reverse();
    return true;
  }

  print() {
    // if queue is empty
    if (this.data.length < 1) return false;

    for (let index = this.data.length - 1; index >= 0; index--) {
      const element = this.data[index];

      // +1 is  adjust to base 1
      process.stdout.write(`${index + 1}: ${element}\n`);
    }
    return true;
  }
  for;
}

module.exports = Queue;
