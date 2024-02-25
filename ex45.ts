//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_info(manufacturer: string, model: string, ...extras: [string, any][]): object {
    let car: {[key: string]: any} = {
        "manufacturer": manufacturer,
        "model": model
    };
    for (let [key, value] of extras) {
        car[key] = value;
    }
    return car;
}

// Calling the function with required information and additional name-value pairs
let my_car = car_info('Toyota', 'Camry', ['color', 'red'], ['year', 2022]);

// Printing the returned object to verify the information stored correctly
console.log(my_car);
