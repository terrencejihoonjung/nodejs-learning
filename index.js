const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
const superman = new SuperHero("Superman");

console.log(batman.getName());
console.log(superman.getName());

batman.setName("Bruce Wayne");
superman.setName("Super Man");

console.log(batman.getName());
console.log(superman.getName());
