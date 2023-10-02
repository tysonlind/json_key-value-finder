I will later either add this as a library, API, or hosted site.

The purpose of this microservice allows you to:

1) input a JSON object

2) input an object key you want to search for in the JSON object

3) Returns all of the values that it found associated with that key in an array along with the dot object notation for those paths.

Sample output of a GIPHY JSON Object with the key "embed_url" passed in.

![image](https://github.com/tysonlind/json_key-value-finder/assets/23481564/6a2cd768-332f-44be-a056-acde3e0725c0)

Note: A test JSON object is provided in order to get an idea of what the output will look like.

To use this for your own JSON objects for now, just replace the data in testJSON.js with your own JSON object.

on line 63, you'll note the function jsonParser(json, 'embed_url'); -- if you input your own data into testJSON.js, then you'll only need to change 'embed_url' to whatever key you're looking to find values for.
