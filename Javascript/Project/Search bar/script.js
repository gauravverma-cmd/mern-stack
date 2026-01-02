    const users = [
    { 
      name: "amis",
      pic: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      bio: "a cool guy with long hair 😊 | stay in his own world",
    },
    { 
      name: "rahul",
      pic: "https://plus.unsplash.com/premium_photo-1705091308398-42be44086a79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YSUyMHBlcnNvbiUyMGlzJTIwZHJpbmtpbmclMjBhJTIwY3VwJTIwb2YlMjB0ZWF8ZW58MHx8MHx8fDA%3D",
      bio: "chai lover ☕ | frontend enthusiast 💻",
    },
    { 
      name: "sneha",
      pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bio: "dancing soul 💃 | smile is my superpower ✨",
    },
    { 
      name: "arjun",
      pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bio: "loves to code & lift 💪 | always curious 😎",
    },
    { 
      name: "meera",
      pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bio: "bookworm 📚 | introvert with imagination 🌌",
    },
    { 
      name: "vishal",
      pic: "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      bio: "tech geek 🤓 | gamer at heart 🎮",
    },
    // { 
    //   name: "priya",
    //   pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    //   bio: "nature lover 🌿 | believes in good vibes only ✨",
    // },
    
  ];

  function showUser(arr){
  arr.forEach(user => {
    // Card
  const card = document.createElement('div');
  card.className = 'card';

  // Image
  const img = document.createElement('img');
  img.src = user.pic;
  img.className = 'bg-img';

  // Blurred Layer
  const blurLayer = document.createElement('div');
  blurLayer.style.backgroundImage = `url(${user.pic})`
  blurLayer.className = 'blurred-layer';

  // Content
  const content = document.createElement('div');
  content.className = 'content';

  const h3 = document.createElement('h3');
  h3.textContent = user.name;

  const p = document.createElement('p');
  p.textContent = user.bio;

  // Build structure
  content.appendChild(h3);
  content.appendChild(p);

  card.appendChild(img);
  card.appendChild(blurLayer);
  card.appendChild(content);

  // Append to body or your desired parent
  document.querySelector(".cards").appendChild(card);

  });
  }

  showUser(users)

let inp = document.querySelector(".inp");
inp.addEventListener("input", () => {
  let newuser = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  if (newuser.length === 0) {
    const msg = document.createElement("h2");
    msg.textContent = "No user found";
    msg.style.color = "gray";
    msg.style.fontSize = "24px";
    msg.style.marginTop = "20px";
    cardsContainer.appendChild(msg);
  } else {
    showUser(newuser);
  }
});
