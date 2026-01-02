// OPERATOR -> It something which used to do operation on the operand.
// There are various types of operator => {
//     1. Arithmetic.           
//     2. Comparison            
//     3. Logical               
//     4. Assignment             
//     5. Unary                 
//     6. Ternary              

//      + - * / % **
//      = == ===
//      <><= >= ! != !== !!
//      && ||
//      ?:
// }

// Arithmetic => [
//     2+2 = 4;
//     2-2 = 0;
//     2*2 = 4;
//     12/2 = 6;
//     12%5 = 2;  // It will give us reminder
//     2**3 = 8; // It means 2 ki power 3.
// ]

// Compression => {
//     2 == 2        true
//     2 === "2"     false
//     12 != 13      true
//     33>22         true
// }

// Assignment => 
    // It helps to assign the value
    let a = 12;
    a+=3;    // yaniki a me value thi use 3 add kro or fir dubara value asssign kro a me 
    a-=1;
    a*=5;
    a/=2

  Logical => {
    // && This is AND operator -> 
//      && agar dono me se ek bhi false hai to result false hi hoga. 
//      true && true  = true 
//      false && true  = false 
//      12>33 && 13>10 = false 
    
    //  || This is called Or operator ->
//        || Agar dono me se ek bhi true hai to value true hogi 
//        12>33 || 23>12 = true
    //    ! This is known as not operator ye value ko opposite kr deta hai 
        //   !false =  ye true hogi 
}  

ternary=>{
//  ? agar condition true hui ye (?) se baad ka code chlega : agar condition false hui to colan(:) se baad ka code chlega.
 
     12>33 ? console.log("true"): console.log("false");
     let score = 78;
     let grade = score>=90 ? "A" : score>=70 ? "B" : score>=50 ? "C" : "False";
     console.log(grade);
     
    }
    


// instanceof => 
    {
        // KI vo kisse juda hua hai ya fir vo kiska khoon hai
        // IT only work with Refrence value
    
    
    let n = []
    n instanceof Array;
    // it shows us true 

    s = {}
    s instanceof Object;
    // it shows us true 

    }