function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/lucas-light.png")
  } else {
    img.setAttribute("src", "./assets/Design_sem_nome-removebg-preview.png")
  }
}
