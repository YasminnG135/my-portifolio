document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const conteudo = btn.nextElementSibling;
        conteudo.style.display =
          conteudo.style.display === "block" ? "none" : "block";
      });
    });
  });  