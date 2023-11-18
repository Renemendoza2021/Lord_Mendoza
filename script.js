document.getElementById("showNumbers").addEventListener("click", function() {
  const icosahedron = document.querySelector(".icosahedron");
  if (icosahedron.style.display === "none") {
    icosahedron.style.display = "flex";
    icosahedron.style.flexDirection = "row"; // Mostrar los números en filas

    for (let i = 1; i <= 20; i++) {
      const face = document.createElement("a");
      face.classList.add("face");
      face.textContent = i;
      const whatsappLink = `https://wa.me/584125214067?text=Hola%20Rene,%20excelente,%20tu%20nota%20es%20${i}`;
      face.href = whatsappLink;
      face.target = "_blank"; // Abrir enlace en una nueva pestaña

      face.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace al hacer clic
        window.open(whatsappLink, "_blank"); // Abrir enlace en una nueva pestaña
      });

      icosahedron.appendChild(face);
    }
  }
});
