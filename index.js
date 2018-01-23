var recipes = ["sandwich": "bread", "sushi": "crab"]

function updateObjectWithKeyAndValue(object, key, value){
  var newData = key: value
  var newRecipes = Object.assign({}, object, newData)
  return newRecipes;
}