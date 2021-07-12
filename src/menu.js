function myFunction() {
    var menuItems = document.getElementById("myTopnav");
    if (menuItems.className === "topnav") {
      menuItems.className += "responsive";
    } else {
      menuItems.className = "topnav";
    }
}
