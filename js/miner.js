// Miner content page
let totalCoins = parseFloat(localStorage.getItem("totalCoins")) || 0.0;
let currentMining = parseFloat(localStorage.getItem("currentMining")) || 0.0;
let miningSpeed = 0.025;
let engineBoost = 100;
let maxMining = 0.05;
let lastClaimed = parseFloat(localStorage.getItem("lastClaimed")) || 0.0;
let claimCooldown = parseInt(localStorage.getItem("claimCooldown")) || 10;
let claimTimer = parseInt(localStorage.getItem("claimTimer")) || claimCooldown;

const totalCoinsElement = document.getElementById("totalCoins");
const currentMiningElement = document.getElementById("currentMining");
const miningSpeedElement = document.getElementById("miningSpeed");
const engineBoostElement = document.getElementById("engineBoost");
const maxMiningElement = document.getElementById("maxMining");
const lastClaimedElement = document.getElementById("lastClaimed");
const claimButton = document.getElementById("claimButton");

function updateDisplay() {
  totalCoinsElement.innerText = totalCoins.toFixed(6);
  currentMiningElement.innerText = currentMining.toFixed(6);
  miningSpeedElement.innerText = miningSpeed;
  engineBoostElement.innerText = engineBoost;
  maxMiningElement.innerText = maxMining;
  lastClaimedElement.innerText = lastClaimed.toFixed(3);
}

const effectiveMiningSpeedPerHour = miningSpeed / (1 - engineBoost / 100);
const effectiveMiningSpeedPerSecond = effectiveMiningSpeedPerHour / 3600;

function updateMining() {
  if (currentMining < maxMining) {
    currentMining += effectiveMiningSpeedPerSecond;
    if (currentMining > maxMining) {
      currentMining = maxMining;
    }
    updateDisplay();
    saveToLocalStorage();
  }
}

// Hàm để xử lý việc claim coin và quản lý cooldown
function claimCoins() {
  if (claimTimer > 0) {
    alert("Please wait for another 10 minutes.");
    return;
  }

  totalCoins += currentMining;
  lastClaimed = parseFloat(currentMining.toFixed(3));
  currentMining = 0;
  updateDisplay();
  saveToLocalStorage();

  claimTimer = claimCooldown;
  updateClaimButtonState();
}

// Hàm để cập nhật trạng thái của nút Claim
function updateClaimButtonState() {
  if (claimTimer > 0) {
    claimButton.innerHTML = `<img src="/images/time.png" alt="clock_icon" class="miner_btn_img">
                             <p class="miner_btn_text">${formatTime(
                               claimTimer
                             )}</p>`;
    claimButton.className = "miner_btn";
  } else {
    claimButton.innerHTML = '<p class="miner_btn_claim_text">Claim</p>';
    claimButton.className = "miner_btn_claim";
  }
  saveToLocalStorage();
}

// Hàm để định dạng thời gian thành dạng hh:mm:ss
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}

function saveToLocalStorage() {
  localStorage.setItem("totalCoins", totalCoins);
  localStorage.setItem("currentMining", currentMining);
  localStorage.setItem("lastClaimed", lastClaimed);
  localStorage.setItem("claimCooldown", claimCooldown);
  localStorage.setItem("claimTimer", claimTimer);
}

// Cập nhật quá trình đào mỗi giây
setInterval(() => {
  updateMining();
  if (claimTimer > 0) {
    claimTimer--;
    updateClaimButtonState();
  }
}, 1000);

updateDisplay();
updateClaimButtonState();
