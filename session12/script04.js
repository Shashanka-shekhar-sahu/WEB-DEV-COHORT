// Object 
let chaiRecipe = {
    name: "masala tea",
    ingredients: {
        teaLeaves:"asam tea",
        milk:"full cream milk",
        sugar:"brown sugar",
        spices: ["cineman","ginger"],
    },
     instruction:"boil water,add tea leaves,milk,sugar and spices"
}

//console.log(chaiRecipe.ingredients.spices[1])

let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction:"boil water,add tea leaves,milk,sugar,spices with some love"
}

//console.log(updatedChaiRecepie)

let chaiTypes = ["masala chai","ginger chai", "green chai"]


let {name, ingredients} = chaiRecipe     // object destructuring // (name, ingredients) = variable
let [firstChai, secondChai] = chaiTypes  // array destructuring  // (firstChai, secondChai) = variable

//console.log(ingredients)
//console.log(secondChai)
