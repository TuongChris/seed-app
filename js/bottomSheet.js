// boost
function openBottomSheet() {
  const bottomSheet = document.querySelector(".upgrade_boost");
  bottomSheet.classList.add("show");
}
function closeBottomSheet() {
  const bottomSheet = document.querySelector(".upgrade_boost");
  bottomSheet.classList.remove("show");
  showBoostContainer();
}
function showBoostContainer() {
  const boostContainer = document.querySelector(".boost_container_ctn");
  boostContainer.style.display = "block";
}

// join Community
function openJoinCommunity() {
  const bottomSheetComnuity = document.querySelector(".join_community");
  bottomSheetComnuity.classList.add("show");
}
function closeJoinCommunity() {
  const bottomSheetComnuity = document.querySelector(".join_community");
  bottomSheetComnuity.classList.remove("show");
  bottomSheetComnuity.style.display = "none";
}
function showJoinCommunity() {
  const joinCommunity = document.querySelector(".join_community");
  joinCommunity.style.display = "block";
}

// event
function openEvent() {
  const bottomSheetEvent = document.querySelector(".event_content");
  bottomSheetEvent.classList.add("show");
}
function closeEvent() {
  const bottomSheetCloseEvent = document.querySelector(".event_content");
  bottomSheetCloseEvent.classList.remove("show");
}
function showEvent() {
  const eventBottomSheet = document.querySelector(".miner_container");
  eventBottomSheet.style.display = "block";
}

// daily
function openDaily() {
  const bottomSheetDaily = document.querySelector(".daily_container");
  bottomSheetDaily.classList.add("show");
}
function closeDaily() {
  const bottomSheetCloseDaily = document.querySelector(".daily_container");
  bottomSheetCloseDaily.classList.remove("show");
}
function showDaily() {
  const dailyBottomSheet = document.querySelector(".miner_container");
  dailyBottomSheet.style.display = "block";
}

// rank
function openRank() {
  const bottomSheetRank = document.querySelector(".rank_container");
  bottomSheetRank.classList.add("show");
}
function closeRank() {
  const bottomSheetCloseRank = document.querySelector(".rank_container");
  bottomSheetCloseRank.classList.remove("show");
}
function showRank() {
  const rankBottomSheet = document.querySelector(".miner_container");
  rankBottomSheet.style.display = "block";
}

// area
function openArea() {
  const bottomSheetArea = document.querySelector(".area_global_container");
  bottomSheetArea.classList.add("show");
}
function closeArea() {
  const bottomSheetCloseArea = document.querySelector(".area_global_container");
  bottomSheetCloseArea.classList.remove("show");
}
function showArea() {
  const areaBottomSheet = document.querySelector(".miner_container");
  areaBottomSheet.style.display = "block";
}
