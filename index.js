var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable


if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); 
} else {
  nodark(); 
}

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    darkmode(); 
  } else {
    nodark(); 
  }
});


function darkmode() {
  document.body.classList.add("dark-mode"); 
  checkbox.checked = true; 
  sessionStorage.setItem("mode", "dark");
}


function nodark() {
  document.body.classList.remove("dark-mode"); 
  checkbox.checked = false; 
  sessionStorage.setItem("mode", "light"); 
}
