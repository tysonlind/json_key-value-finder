import { json } from './testJSON.js';

//JSON Parser -- takes a JSON object and recursively returns all values found associated with the searchKey in the object tree
//Inputs (JSON Object, search key)
//Outputs Array of values
function findValues(jsonObj, searchKey){
    let output = [];
    function nodeSearch(jsonObj, searchKey){
     let json = jsonObj;
     for (let i in json){
       if (i == searchKey){
         output.push(json[i]);
       } else if (typeof json[i] == "object"){
         nodeSearch(json[i], searchKey);
       }
      }
    }
    nodeSearch(jsonObj, searchKey);
    return output;
  }

  function findPaths(obj, targetKey, currentPath = "") {
    let paths = [];

    if (Array.isArray(obj)) {
        // Handle arrays
        for (let i = 0; i < obj.length; i++) {
            const nextPath = `${currentPath}[${i}]`;
            if (typeof obj[i] === "object" && obj[i] !== null) {
                const deepSearch = findPaths(obj[i], targetKey, nextPath);
                paths = paths.concat(deepSearch); // Concatenate any found paths
            } else if (i === targetKey) {
                paths.push(nextPath);
            }
        }
    } else {
        // Handle objects
        for (let key in obj) {
            const nextPath = currentPath ? `${currentPath}.${key}` : key;

            if (key === targetKey) {
                paths.push(nextPath);
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                const deepSearch = findPaths(obj[key], targetKey, nextPath);
                paths = paths.concat(deepSearch); // Concatenate any found paths
            }
        }
    }

    return paths;
}

function jsonParser (jsonObj, searchKey){
  const output = [];
  const values = findValues(jsonObj, searchKey);
  const paths = findPaths(jsonObj, searchKey);
  for (let i = 0; i < values.length; i++){
    output.push(paths[i], values[i])
  }
  return output;
}

  console.log(jsonParser(json, 'embed_url'));