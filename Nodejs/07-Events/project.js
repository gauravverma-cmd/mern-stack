// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)
// ? TRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED


// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered


const EventEmitter = require("events");
const userEmitter = new EventEmitter();
const fs = require("fs");

const logFile = "countlog.json";

// Object to track event counts
const trackData = {
  login: 0,
  logout: 0,
  purchase_item: 0,
  profile_update: 0
};

// Load existing count data safely if file exists
if (fs.existsSync(logFile)) {
  try {
    const data = fs.readFileSync(logFile, "utf-8"); 
    if (data.trim()) {
      Object.assign(trackData, JSON.parse(data));
    }
  } catch (err) {
    console.error("Error loading JSON log file, starting with fresh counters.", err.message);
  }
}

// Function to persist counts to disk
function saveCount() {
  fs.writeFileSync(logFile, JSON.stringify(trackData, null, 2));
}

// Register Event Listeners
userEmitter.on("LOGIN", (username) => {
  trackData.login++;
  console.log(`${username} logged in successfully`);
  saveCount();
});

userEmitter.on("LOGOUT", (username) => {
  trackData.logout++;
  console.log(`${username} logged out successfully`);
  saveCount();
});

userEmitter.on("PURCHASE", (username, items) => {
  trackData.purchase_item++;
  console.log(`${username} purchased: ${items}`);
  saveCount();
});

userEmitter.on("PROFILE_UPDATE", (username, field) => {
  trackData.profile_update++;
  console.log(`${username} updated their profile field: ${field}`);
  saveCount();
});

userEmitter.on("SUMMARY", () => {
  console.log("\n--- Event Summary ---");
  console.log(`Logins          : ${trackData.login}`);
  console.log(`Logouts         : ${trackData.logout}`);
  console.log(`Purchases       : ${trackData.purchase_item}`);
  console.log(`Profile Updates : ${trackData.profile_update}`);
  console.log("---------------------\n");
});

// Trigger Events
userEmitter.emit("LOGIN", "GRV");
userEmitter.emit("LOGOUT", "GRV");
userEmitter.emit("PURCHASE", "GRV", "SMK Typhoon");
userEmitter.emit("PROFILE_UPDATE", "GRV", "Email_Address");

// Trigger Summary Event
userEmitter.emit("SUMMARY");