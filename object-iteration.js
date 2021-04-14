// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    
    const someObjectArray = Object.entries(someObject);
    console.log(someObjectArray)
    let screamingObject = {}
    for (let [key, value] of someObjectArray){
        screamingObject[key.toUpperCase()] = value;
    }
    return screamingObject

    // return screamingObject
    // const objectValues = Object.values(someObject);
    // objectValues.map((item) => upperCaseKeys.push(item))
    
    
    
    
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    const objectAsArray = Object.entries(someObject);
    
    return objectAsArray.toString();
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const objectEntries = Object.entries(someObject)
    
    return objectEntries;
}
