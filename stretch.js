// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {
    
    
    // const newObjectArray = arr.map((item) => {
    //     const newKey = item.id
    //     const newValue = item.price 
    //      const newObject = ( { [newKey]: newValue } )
    //      return newObject
        
    // })
    const newObjectArray = Object.entries(arr);

    for (let [key, value] of newObjectArray) {
        console.log(value)
    }

    //  const [ one, two, three, four ] = newObjectArray;
    // console.log(one, two, three, four);
    // const newObject = { one, two, three, four }
    // console.log(newObject)
    // const newObject = { newObjectArray[0], }
    // console.log(newObject)
 
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
//     const something = arr.map((item) => {
//         let hashKey = item.id
//        return { [hashKey]: { ...item } }
//     })
//    let newObject = {}
//    for (let item of arr) {
//        let hashKey = item.id
//     //    console.log(hashKey)
//        newObject[hashKey]: { ...item } 
//        console.log(newObject)

      
//    }
//     // console.log(newObject)
//     return newObject;
 }


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    const categories = [];
    for (let item of arr) {
        categories.push((item.category))
    }
    const [ one, two, three, four, five] = categories;
    // console.log(one, two, three, four, five)
    const result = arr.filter(item => item.category === 'fruit').length;
    
    return {};
}