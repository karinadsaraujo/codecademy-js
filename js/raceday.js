console.log('race day')

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true; 
const age = 18;

if (registeredEarly && age > 18){
  raceNumber += 1000;
}

if (registeredEarly && age > 18){
  console.log(`Race at 9:30 a.m - Your number ${raceNumber}`);
} else if (!registeredEarly && age > 18){
  console.log(`Race at 11:00 a.m - Your number ${raceNumber}`);
} else if (age < 18){
  console.log(`Race at 12:30 p.m - Your number ${raceNumber}`);
} else {
  console.log('You shout see the registration desk');
}