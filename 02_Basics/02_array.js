//array methods can ve seen from console then creating an array then prototype
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)//this will push the array at last position of old array creating array inside array

console.log(marvel_heros);
console.log(marvel_heros[3][1])//3rd element i.e array ka 1 i.e 2nd element

const allHeros = marvel_heros.concat(dc_heros)//concat creates a new merged array which needs to be hold in another variable
console.log(allHeros);

//easier method -> spread operator -> glass drops breaks and spreads

const all_new_heros = [...marvel_heros, ...dc_heros]
//... means spreading and imagine breaking glasses and combining spread directly aise

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//.flat dissolves all internal arrays and bracket after that specifies to what depth do we need to dissolve and then spreads these arrays in the orignal maintaining order
console.log(real_another_array);

//data scrap from a web page sometimes comes in a different format node list,object,string etc but chahiye to array so there array is used like:-

console.log(Array.isArray("Hitesh"))//checks whether currently this string is array or not and so will return false as is string
console.log(Array.from("Hitesh"))//converts our string to array 0-> h, 1->i etc
console.log(Array.from({name: "hitesh"})) // interesting Returns an empty array as itself doesnt know ke keys(name) ka array banana hai ya individual data ke elements ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//.of returns a new array from set of elements