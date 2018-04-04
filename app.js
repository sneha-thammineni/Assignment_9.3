var evens = [2,4,6,8];
var odds = [1,3,5,7];
var primes = [2,3,5,7,11];
var data = [...primes, ...evens, ...odds]; //spread operator is used to combine all the values in the 
console.log(data);
var newPrime = [...primes];
console.log(newPrime);


//Object Destructuring is used to extract values from parts of the data
var jamesBond = {
            first: 'James',
            last: 'Bond',
            country: 'United States',
            city: 'New york',
            twitter: '@jamesbond'
        };
        var {first,last, country, city,twitter} = jamesBond;
         console.log(first);
          console.log(last);
          console.log(country);
console.log(city);
console.log(twitter);


//Array Destructuring is used to extract multiples values from array
var players = ['paul', 'andy', 'darrell', 'jim'];
 
var [player1, player2, player3, player4] = players;

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);