(async) => {
  Callback;
  Promises;
};

// Ek function ko Agar aap ek aur function bhej rahe ho parameter me to wo parameter wala function kehlata hai callback
// Mtlb ki function k andar agar k function pass kr rhe ho to callback khelata hai
function badd(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
badd(function () {
  console.log("hyyyy");
});

// >> What exactly call back hell looks like -----

function profileLekarAao(username, cb) {
  console.log("fetching profile data....");
  setTimeout(() => {
    cb({ _id: 243433, username, age: 21, email: "hierhe@jf.com" });
  }, 2000);
}

function sarePostLekarAao(id, cb) {
  console.log("fetching all post.....");
  setTimeout(() => {
    cb({ _id: id, post: ["hyy", "helllo", "good morning"] });
  }, 3000);
}

function savedPostNikalao(id, cb) {
  console.log("fetching all saved Post...");
  setTimeout(() => {
    cb({ _id: id, savedPost: [1, 23, 4, 5, 6, 67, 7, 8] });
  }, 4000);
}

profileLekarAao("bhereium", function (profileData) {
  console.log(profileData);
  sarePostLekarAao(profileData._id, function (post) {              
    console.log(post);
    savedPostNikalao(profileData._id, function (savedPost) {
      console.log(savedPost);
    });
  });
});

// >> Promise - resolve and reject.
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      resolve("resolved with " + rn);
    } else {
      reject("reject with " + rn);
    }
  }, 10000);
});

promise
  .then(function (val) {
    // agar chla to then kaam krega
    console.log(val);
  })
  .catch(function (val) {
    console.log(val); // agar nahi chla to catch kaam krega
  });

// Async Await- ye ek simple way hai promise ko chlane ka hum ise then aur catch ki janjha chla skte hai..

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 100);
    if (rn > 50) res("Resolved with: " + rn);
    else rej("reject with: " + rn);
  }, 1000);
});

async function abcd() {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

abcd()

