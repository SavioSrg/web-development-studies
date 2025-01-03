import products from './produtos.json'
import fs from "node:fs"
import path from "node:path"


const productJson = JSON.stringify([
    {
        "name": "Pair of Sock",
        "amountInStock": 100,
        "unitValue": 5
    },
    
    {
        "name": "T-Shirt",
        "amountInStock": 500,
        "unitValue": 45
    }
], null, 2)

const fileOutPath = path.join(__dirname, 'generated-products.json')
fs.writeFileSync(fileOutPath, productJson)


const productsteste = JSON.parse(productJson)
console.log(productJson)
console.log(productsteste)

// console.log(products)
// products.forEach(products=> console.log(products.name))

