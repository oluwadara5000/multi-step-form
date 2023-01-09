const toggle = document.querySelector(".toggle input");

document.getElementById("monthly").style.color = "#47587d";
document.getElementById("yearly").style.color = "#bdbec4";
document.getElementById("next-monthly").style.display = "block";
document.getElementById("next-yearly").style.display = "none";
document.getElementById("arcade-year-one").style.display = "none";
document.getElementById("arcade-year-two").style.display = "none";
document.getElementById("advanced-year-one").style.display = "none";
document.getElementById("advanced-year-two").style.display = "none";
document.getElementById("pro-year-one").style.display = "none";
document.getElementById("pro-year-two").style.display = "none";

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    document.getElementById("monthly").style.color = "#bdbec4";
    document.getElementById("yearly").style.color = "#47587d";
    document.getElementById("next-monthly").style.display = "none";
    document.getElementById("next-yearly").style.display = "block";
    document.getElementById("arcade-month").style.display = "none";
    document.getElementById("advanced-month").style.display = "none";
    document.getElementById("pro-month").style.display = "none";
    document.getElementById("arcade-year-one").style.display = "block";
    document.getElementById("arcade-year-two").style.display = "block";
    document.getElementById("advanced-year-one").style.display = "block";
    document.getElementById("advanced-year-two").style.display = "block";
    document.getElementById("pro-year-one").style.display = "block";
    document.getElementById("pro-year-two").style.display = "block";
  } else {
    document.getElementById("monthly").style.color = "#47587d";
    document.getElementById("yearly").style.color = "#bdbec4";
    document.getElementById("next-monthly").style.display = "block";
    document.getElementById("next-yearly").style.display = "none";
    document.getElementById("arcade-month").style.display = "block";
    document.getElementById("advanced-month").style.display = "block";
    document.getElementById("pro-month").style.display = "block";
    document.getElementById("arcade-year-one").style.display = "none";
    document.getElementById("arcade-year-two").style.display = "none";
    document.getElementById("advanced-year-one").style.display = "none";
    document.getElementById("advanced-year-two").style.display = "none";
    document.getElementById("pro-year-one").style.display = "none";
    document.getElementById("pro-year-two").style.display = "none";
  }
});

var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].type == "checkbox") {
    inputs[i].checked = false;
  }
}
