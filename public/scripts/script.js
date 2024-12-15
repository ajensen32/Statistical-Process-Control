"use strict";
const bulb = `💡`;
const bulb_div = document.getElementById("lightbulb");
let pid = null;
let vals = [0.2, 0.3, 0.7, 0.8, 0.5];
let enc = vals.map(mapValueToPixel);
let lastMeasurementTime = Date.now();
let yellowClickCount = { top: 0, bottom: 0 };

function flip() {
  if (bulb_div.innerHTML == bulb) {
    return (bulb_div.innerHTML = "");
  }
  return (bulb_div.innerHTML = bulb);
}

const pointsDiv = document.getElementById("points-div");
const codeDiv = document.getElementById("code");
pointsDiv.innerHTML = "";

function addPoint() {
  vals.shift();
  enc.shift();
  const val = Number(codeDiv.value);
  const e = mapValueToPixel(val);
  vals.push(val);
  enc.push(mapValueToPixel(vals[vals.length - 1]));
  console.log("val", val, "e", e);
  const ans = vals.map(
    (v, i) =>
      `<div class='point' style='margin-left:${
        (i + 1) * 125
      }px; top:${mapValueToPixel(v)}px'></div>`
  );
  console.log(ans, vals);
  pointsDiv.innerHTML = ans.join("");

  // Flash the bulb and notify based on the measurement value
  if (val >= 0.6) {
    flashBulb("Tighten the screw and remeasure");
  } else if (val <= 0.2) {
    flashBulb("Loosen the screw and remeasure");
  } else {
    clearNotification();
  }

  // Reset yellow click count
  yellowClickCount = { top: 0, bottom: 0 };

  // Update last measurement time
  lastMeasurementTime = Date.now();
}

addPoint();

function mapValueToPixel(value) {
  const maxValue = 0.6;
  const maxPixel = 290;
  // Ensure the value is within the expected range
  if (value < 0) value = 0;
  if (value > maxValue) value = maxValue;
  // Map the value to pixel position
  const ans = maxPixel - (value / maxValue) * maxPixel;
  console.log("value", value, "ans", ans);
  return ans;
}

function panic() {
  bulb_div.style.background = "red";
  pid = setInterval(() => {
    flip();
  }, 300);
}

function calm() {
  bulb_div.style.background = "transparent";
  clearInterval(pid);
  pid = null;
}

function flashBulb(message) {
  bulb_div.style.background = "red";
  document.getElementById("notification").innerText = message;
  pid = setInterval(() => {
    flip();
  }, 300);
}

function clearNotification() {
  bulb_div.style.background = "transparent";
  document.getElementById("notification").innerText = "";
  if (pid !== null) {
    clearInterval(pid);
    pid = null;
  }
}

// Handle clicks on yellow bars
document.querySelectorAll(".bar.yellow").forEach((bar, index) => {
  bar.addEventListener("click", () => {
    if (index === 1) {
      // Top yellow bar
      yellowClickCount.top++;
      if (yellowClickCount.top === 2) {
        panic();
        flashBulb("Tighten the screw and remeasure");
      }
    } else if (index === 4) {
      // Bottom yellow bar
      yellowClickCount.bottom++;
      if (yellowClickCount.bottom === 2) {
        panic();
        flashBulb("Loosen the screw and remeasure");
      }
    }
  });
});

// Flash the bulb every minute to request a measurement
setInterval(() => {
  if (Date.now() - lastMeasurementTime >= 60000) {
    flashBulb("Please take a measurement");
    lastMeasurementTime = Date.now(); // Update the last measurement time to avoid continuous flashing
  }
}, 60000);



// async function registerUser(username, password) {
//   const response = await fetch('http://localhost:5000/auth/register', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   });
//   return response.json();
// }

// // Log in a User
// async function loginUser(username, password) {
//   const response = await fetch('http://localhost:5000/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   });
//   const data = await response.json();
//   localStorage.setItem('token', data.token); // Save token for future requests
// }







