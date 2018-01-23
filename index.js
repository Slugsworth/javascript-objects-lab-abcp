var recipes = ["sandwich": "bread", "sushi": "crab"]

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = {key: value}
  var newRecipes = Object.assign({}, object, newObject)
  return newRecipes;
}