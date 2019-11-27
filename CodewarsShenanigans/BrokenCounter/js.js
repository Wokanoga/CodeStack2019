function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function() {
    this.value++;
}

Counter.prototype.getValue = function() {
    this.value;
}

Counter.prototype.reset = function() {
    this.value = 0;
}


test = new Counter;

console.log(test);