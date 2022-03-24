let arr_school = [
    {
        school: 'wepro',
        budget: 800000,
        tax: 13,
        students: 190,

        expenses: [
            {
                title: 'furniture',
                price: 2000
            },
            {
                title: 'water',
                price: 800
            },
            {
                title: 'electricity',
                price: 5000
            }
        ]
    },
    {
        school: 'Amir',
        budget: 30000000,
        tax: 10,
        students: 700,
        expenses: [
            {
                title: 'furniture',
                price: 90000
            },
            {
                title: 'compi',
                price: 100000
            },
            {
                title: 'electricity',
                price: 50000
            },
            {
                title: 'close',
                price: 9999
            },
            {
                title: 'svechi',
                price: 50000
            },
            {
                title: 'Amir',
                price: 1
            },
            {
                title: 'anime',
                price: 999999
            },
        ]
    },
    {

        school: 'IT',
        budget: 9999999,
        tax: 15,
        students: 100,
        expenses: [
            {
                title: 'furniture',
                price: 20000
            },
            {
                title: 'water',
                price: 1000
            },
            {
                title: 'electricity',
                price: 5000
            },
        ]
    },
    {   
        school: '34',
        budget: 1500000,
        tax: 15,
        students: 3000,
        expenses: [
            {
                title: 'internet',
                price: 1500
            },
            {
                title: 'computers',
                price: 2000
            },
            {
                title: 'electricity',
                price: 8000
            }
        ]
    },
    {   
        school: 51,
        budget: 800000,
        tax: 16,
        students: 2100,
        expenses: [
            {
                title: 'television',
                price: 2000
            },
            {
                title: 'comp',
                price: 4000
            },
            {
                title: 'aspalt',
                price: 2500
            }
        ]
    },
    {   
        school: 'GLC',
        budget: 400000,
        tax: 13,
        students: 530,
        expenses: [
            {
                title: 'tables',
                price: 4000
            },
            {
                title: 'trips',
                price: 80000
            },
            {
                title: 'electricity',
                price: 8000
            }
        ]
    }
]
 

for(let item of arr_school){
    item.taxPerMonth = item.tax*item.budget/100
    
}




let maxTaxnum = arr_school.reduce((a,b)=>{if(a.taxPerMonth > b.taxPerMonth){
    return a
} else{
    return b
}})

let minTaxnum = arr_school.reduce((a,b)=>{if(a.taxPerMonth < b.taxPerMonth){
    return a
} else{
    return b
}})




console.log(arr_school);
console.log(maxTaxnum);
console.log(minTaxnum);