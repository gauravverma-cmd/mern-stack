// debouncing => app jb bhi kuch action kr rhe ho aur app ye nahi chate ki hr ek action pr kuch ho, jb bhi mere action k bech me koi specific time gap aajaeye tb koi reaction ya action ( yaniki jb user kuch time k liye ruk jaye) ho use hum debouncing kehte hai.

// Debouncing ek technique hai jisme hum ensure karte hain ki koi function har ek action par na chale,
// balki sirf tab chale jab user ne kuch time tak action karna band kar diya ho (ya ruk gaya ho).

// Ex-> Maanlo ki mai kuch search kr rha hu amazon pr to hr ek letter likhne k baad kuch action na ho sirf jb ho jb mai likhna band kr du ya mai ruk jau kuch time k liye.

function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...args);
    }, delay);
};  
}

let input = document.querySelector("input");
input.addEventListener("input",debounce(function () {
    console.log("rn")
}, 1000)
);
