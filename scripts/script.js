document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-container');
  let containerId = null;
  const overlay = document.getElementById('overlay');

  function removeFlipClass() {
    imageContainers.forEach(container => {
      container.classList.remove('flip');
    });
  }

  function toggleFlip(container) {
    container.classList.toggle('flip');
  }

  imageContainers.forEach(container => {
    container.addEventListener('click', () => {
      overlay.style.zIndex = '5';
      containerId = container.id;

      // Remove the flip class from all other containers
      removeFlipClass();

      // Toggle the flip class on the clicked container
      toggleFlip(container);

      container.querySelector('img').style.opacity = '0';
      container.style.zIndex = '10';

      if (containerId === 'Q2') {
        container.querySelector('.q2-text').style.display = 'block';
      }

      if (containerId === 'Q3') {
        container.querySelector('.q3-text').style.display = 'block';
      }
    });

    container.addEventListener('mouseout', () => {
      overlay.style.zIndex = '-1';
      container.querySelector('img').style.opacity = '1';
      container.style.zIndex = '1';

      if (containerId === 'Q2') {
        container.querySelector('.q2-text').style.display = 'none';
      }

      if (containerId === 'Q3') {
        container.querySelector('.q3-text').style.display = 'none';
      }
    });
  });
});
