function showContent(sectionId) {
  document.getElementById('general').classList.add('hidden');
  document.getElementById('em').classList.add('hidden');
  document.getElementById(sectionId).classList.remove('hidden');
}

function checkLogin() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "biomed2025") {
    document.getElementById("login").style.display = "none";
    document.getElementById("protectedContent").style.display = "block";
  } else {
    alert("Identifiants incorrects.");
  }
}