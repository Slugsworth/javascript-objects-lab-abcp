var recipes = {sandwich: "bread", sushi: "crab"}

function updateObjectWithKeyAndValue(object, key, value){
return object.assign({}, object, {[key]: value})
}