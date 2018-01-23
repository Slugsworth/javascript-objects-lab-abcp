var recipes = {sandwich: "bread", sushi: "crab"}

function updateObjectWithKeyAndValue(object, key, value){
var newObject =  Object.assign({}, object, {[key]: value})
return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
var newObj = ({}, object)
delete newObj.key   
return newObj}
    
    function destructivelyDeleteFromObjectByKey(object, key){
return delete object[key];
    }
    
