const button = document.querySelector('button');
const toast = document.querySelector('#notification');

button.addEventListener("click", () => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  });