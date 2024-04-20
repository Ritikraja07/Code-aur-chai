const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


console.log(Array.isArray("Ritik")); // .is array Important
console.log(Array.from("Ritik"));
console.log(Array.from({name: "Ritik"})); // .from array Important


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // .of array Important