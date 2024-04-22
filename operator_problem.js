function arrayToExpression(arr) {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
            stack.push( arrayToExpression(element) );
        } else if (typeof element === 'string') {
            stack.push(element);
        }
    }
    const operator = stack.shift(); // Extract the main operator from front of array
    return stack.join(` ${operator} `);
}

const array = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];
const expression = arrayToExpression(array);

console.log(expression);