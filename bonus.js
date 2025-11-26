function createcounter(init) {
  let value = init;

  function increment() {
    return ++value;
  }
  function decrement() {
    return --value;
  }
  function reset() {
    value = init;
    return value;
  }
  return {
    increment,
    decrement,
    reset,
  };
}
const counter = createcounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
