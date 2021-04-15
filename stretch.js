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
    const ObjectIds = arr.map((item) => item.id)
    console.log(ObjectIds)

    const newObject = {}
    for (let id of ObjectIds ) {
        newObject[id] = arr.filter((item) => item.id === id)[0].price
    }

  

    

    return newObject;
    
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
    const newObject = {}
    const names = arr.map((item) => item.id);
    
    for (let i = 0; i < names.length; i++){
        
        newObject[names[i]] = arr.filter((item) => item)[i]
        
    }
   
return newObject
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
   const newObject = {}
   const ObjectIds = arr.map((item) => item.id)
   console.log(ObjectIds);
    for (let arrayItem of arr) {
        let count = 0;
        arr.forEach((item) => {
            if (item.category === arrayItem.category){
                count++
            }
        })

        newObject[arrayItem.category] = count
        
    }

   return newObject
}