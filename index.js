var recipes = ["sandwich": "bread", "sushi": "crab"]

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, object, ["key" : "value"])
  return newRecipes;
}