document.querySelector("#sideBar-close").addEventListener("click", hideMenu);
document.querySelector("#sideBar-open").addEventListener("click", showMenu);

function showMenu() {
  document.querySelector("#nav-items").style.right = "0";
}

function hideMenu() {
  document.querySelector("#nav-items").style.right = "-300px";
}
