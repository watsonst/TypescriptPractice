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
 // var max = Math.max.apply(Math, mountains.map(function (o) {return o.height;}))
  //var obj = mountains.find(function(o) {return o.height == max; })
 for (var mountain in mountains){
     if (mountains.h)
 }
  for ( var mountain in mountains){
    console.log(max);
  }

  return "max.name";
  
}

const tallMount = findNameOfTallestMountain(mountains);
console.log(tallMount);


 
/* interface Product{
    name: string;
    price: number;
}

let products: {name: string, price: number}[] = [
    {name: "Mood Pod", price: 260 },
    {name: "Shoes", price: 100 },
    {name: "Earrings", price: 30 },
    {name: "Custom Ornament", price: 50 },
];


function calcAverageProductPrice(products: Product[]): number{
    prod
};

const AvgPrice = calcAverageProductPrice(products);
console.log(AvgPrice);
 */

/* interface InventoryItem{
    product: Product;
    quantity: Number;
}

const inventory: InventoryItem[] =[
    {Product.name: "motor", product.price: 10.00, quantity: 10},
    {Product.name: "sensor", product.price: 12.50, quantity: 4},
    {Product.name: "LED", product.price: 1.00, quantity: 20}
];

function calcInventoryValue(inventory: InventoryItem[]): number{

}

const calcValue = calcInventoryValue(inventory);
console.log(calcValue); */