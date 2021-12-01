import { NumberLiteralType } from "typescript";

 interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {name: "Kilimanjaro"  , height: 19341},
    {name: "Everest"  , height: 29029},
    {name: "Denali"  , height: 20310},
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
  var max = Math.max.apply(Math, mountains.map(function (o) {return o.height;}))
  var obj = mountains.find(function(o) {return o.height == max; })

  return obj!.name
};

const tallMount = findNameOfTallestMountain(mountains);
console.log(tallMount); 


 
  interface Product{
    name: string;
    price: number;
};

let products: {name: string, price: number}[] = [
    {name: "Mood Pod", price: 260 },
    {name: "Shoes", price: 100 },
    {name: "Earrings", price: 30 },
    {name: "Custom Ornament", price: 50 },
];


 function calcAverageProductPrice(products: Product[]): number{
    var total = 0;
    for (var i=0; i<products.length; i++){
        total += products[i].price
    };

    var avg = total / products.length;
    return avg;
};

const AvgPrice = calcAverageProductPrice(products);
console.log(AvgPrice);
 

interface InventoryItem{
    name: Product["name"],
    price: Product["price"],
    quantity: number;
}

let inventory: InventoryItem[] = [
    {name: "motor", price: 10.00, quantity: 10},
    {name: "sensor", price: 12.50, quantity: 4},
    {name: "LED", price: 1.00, quantity: 20},

];


inventory.forEach(function (value) {
  console.log(value);
}); 



function calcInventoryValue(inventory: InventoryItem[]): number{
    var total = 0;
    for (var i=0; i < inventory.length; i++){
        total += inventory[i].price * inventory[i].quantity;
    }

    return total;
}

const calcValue = calcInventoryValue(inventory);
console.log(calcValue);