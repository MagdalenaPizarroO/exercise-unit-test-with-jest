// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.6 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(10)

    // if 1 dollar are 106.6 yen, then 10 dollars should be (10 * 106.6)
    const expected = 10 * 106.6; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(10)).toBe(1066); //1 dollar are 106.6 yen, then 10 dollars should be (10 * 106.6)
})

test("One yen should be 0.006 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYenToPound(1000);

    // if 1 yen are 0.006 pound, then 1000 yen should be (1000 * 0.006)
    const expected = 1000 * 0.006; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(6); //1 yen are 0.006 pound, then 1000 yen should be (1000 * 0.006)
})