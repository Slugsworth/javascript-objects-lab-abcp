var recipes = {sandwich: "bread", sushi: "crab"}

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]: value})
}

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
var newObj = ({}, object)
delete newObj[key]
    return newObj}
    
    
