function calc(val) {
    const self = Object.create(calc.prototype);
    self.val = val;
    return self;
}
calc.prototype = {
    plus(val) {
        this.val += val;
        return this;
    }
};
    
console.log(calc(1).plus(2));