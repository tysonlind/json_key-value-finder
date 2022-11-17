import { testJSON } from "./testJSON";

//JSON Parser -- takes a JSON object and recursively returns all values found associated with the searchKey in the object tree
//Inputs (JSON Object, search key)
//Outputs Array of values
function jsonParser(jsonObj, searchKey){
    let output = [];
    function nodeSearch(jsonObj, searchKey){
     let json = jsonObj;
     for (let i in json){
       if (i == searchKey){
         output.push(json[i]);
       }
       if (typeof json[i] == "object"){
         nodeSearch(json[i], searchKey);
       }
      }
    }
    nodeSearch(jsonObj, searchKey);
    return output;
  }

  console.log(jsonParser(testJSON,"embed_url"));