// Factory-function-pattern - Ek aisa function jiske ander ek object create hota ho bina kisi class ya new keyword use kiye . 
// Basically factory of making a new function 
// Evry time when we call the function it always give us a new object evrytime which is a repersentaion of a new product.. 
function createProduct(name, price){
    let stocks = 10;
    return {
        name,
        price,
        buy(qty){
            if(qty<=stocks){
                stocks -= qty
                console.log(`${qty} pieces booked - ${stocks} pieces left.`)
            }else{
                console.error(`we only have ${stocks} pieces in our stocks`)
            }
        },
        refill(qty){
            stocks += qty
            console.log(`refilled the stcoks - ${stocks} pieces in stocks`);
            
        },
        checkStocks(){
            console.log(stocks)
        }
    }
}

let iphone = createProduct("iphone" , 80000)
let macBook = createProduct("m3", 150000)
console.log(iphone)
iphone.buy(4)
iphone.refill(10)
iphone.checkStocks()


console.log(macBook)
macBook.buy(2)
macBook.refill(40)
macBook.checkStocks()