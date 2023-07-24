




document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("sliderValue");
    let isDragging = false;
  
    slider.addEventListener("click", function () {
      isDragging = true;
    });
  
    document.addEventListener("click", function (event) {
      if (isDragging) {
        const sliderRect = slider.getBoundingClientRect();
        const offsetX = event.clientX - sliderRect.left;
        const percentage = (offsetX / sliderRect.width) * 100;
  
        const value = Math.round(percentage);
        slider.style.background = `linear-gradient(to right, #4CAF50 ${value}%, #ddd ${value}%)`;
        sliderValue.textContent = value;
      }
    });
  
    document.addEventListener("click", function () {
      isDragging = false;
    });
  });
  