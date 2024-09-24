document.addEventListener("DOMContentLoaded", function () {
   let progressBar = document.getElementById("progress-bar");

   // Defina o progresso inicial em 40%
   let progress = 40;

   // Atualize a largura da barra de progresso
   progressBar.style.width = progress + "%";
});

document.addEventListener("DOMContentLoaded", function () {
   const testimonials = document.querySelectorAll(".testimonial");
   const icons = document.querySelectorAll(".icon-test, .icon-no-test");
   const nextButton = document.querySelector(".btn-next");
   const prevButton = document.querySelector(".btn-prev");

   let currentIndex = 0; // Controla qual testimonial está em destaque (z-index 3)

   function updateTestimonials(index) {
      // Resetar as posições
      testimonials.forEach((testimonial, i) => {
         testimonial.style.zIndex =
            index === i
               ? 3
               : index - i === 1 || i - index === testimonials.length - 1
               ? 2
               : 1;
         testimonial.style.position = index === i ? "relative" : "absolute";
         testimonial.style.right = index === i ? "0%" : "-10%";
         testimonial.style.bottom = index === i ? "0%" : "-30%";
      });

      // Atualizar ícones de indicação de qual testimonial está ativo
      icons.forEach((icon, i) => {
         icon.classList.toggle("icon-test", i === index);
         icon.classList.toggle("icon-no-test", i !== index);
      });
   }

   nextButton.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonials.length; // Avança para o próximo testimonial
      updateTestimonials(currentIndex);
   });

   prevButton.addEventListener("click", function () {
      currentIndex =
         (currentIndex - 1 + testimonials.length) % testimonials.length; // Volta para o testimonial anterior
      updateTestimonials(currentIndex);
   });

   updateTestimonials(currentIndex); // Inicializa a exibição com o primeiro testimonial em destaque
});

const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentIndex = 0;

function updateTestimonials() {
   testimonials.forEach((testimonial, index) => {
      testimonial.style.zIndex = 2;
      testimonial.style.opacity = 1;
      testimonial.style.position = "absolute";
      testimonial.style.border = "none"; // Remove a borda de todos inicialmente
      testimonial.style.boxShadow = "none"; // Remove a sombra de todos
   });

   // Atualiza o atual - z-index 3 passa a ser 1
   testimonials[currentIndex].style.zIndex = 3;
   testimonials[currentIndex].style.opacity = 1;
   testimonials[currentIndex].style.position = "relative";
   testimonials[currentIndex].style.boxShadow = "none";
   testimonials[currentIndex].style.boxShadow =
      "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)";

   // Atualiza o próximo - z-index 1 passa a ser 2
   let nextIndex = (currentIndex + 1) % testimonials.length;
   testimonials[nextIndex].style.zIndex = 2;
   testimonials[nextIndex].style.opacity = 1;
   testimonials[nextIndex].style.position = "absolute";
   testimonials[nextIndex].style.border = "2px solid #F7F7F7"; // Adiciona a borda no z-index 2

   // Atualiza o anterior - z-index 2 passa a ser 3
   let prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
   testimonials[prevIndex].style.zIndex = 1;
   testimonials[prevIndex].style.opacity = 0;
   testimonials[prevIndex].style.position = "absolute";
   testimonials[prevIndex].style.border = "2px solid #F7F7F7"; // Adiciona a borda no z-index 3
}

nextBtn.addEventListener("click", () => {
   currentIndex = (currentIndex + 1) % testimonials.length;
   updateTestimonials();
});

prevBtn.addEventListener("click", () => {
   currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
   updateTestimonials();
});

// Inicializa o estado
updateTestimonials();

var swiper = new Swiper(".mySwiper", {
   effect: "cards",
   grabCursor: true,
});

document.querySelector(".btn-subscribe").addEventListener("click", function () {
   const button = this;
   const emailInput = document.getElementById("email-input");

   // Adiciona a animação ao botão
   button.classList.add("ping-animation");

   // Remove a animação após ela terminar (0.4s)
   setTimeout(() => {
      button.classList.remove("ping-animation");
   }, 400);

   // Limpa o campo de email
   emailInput.value = "";
});

const btnLanguage = document.querySelector(".btn-language");
const languageList = document.querySelector(".language-list");
const selectedLang = document.querySelector(".selected-lang");
const langOptions = document.querySelectorAll(".lang-option");

btnLanguage.addEventListener("click", function () {
   languageList.classList.toggle("show");
});

langOptions.forEach((option) => {
   option.addEventListener("click", function () {
      selectedLang.textContent = this.textContent;
      languageList.classList.remove("show");
   });
});
