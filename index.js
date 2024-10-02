// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const updatesDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(drivers,name){
return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}
findMatching("Bobby");
findMatching("Sammy");

function fuzzyMatch(drivers,name){
    return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}
fuzzyMatch("Sa");

function matchName (updatesDrivers,string){
    return updatesDrivers.filter(driver => driver.name === string);
}
matchName("Bobby");