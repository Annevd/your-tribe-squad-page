const imageContainer = document.querySelectorAll('.image-container');

imageContainer.forEach(function(image){
  image.addEventListener("click", function(){
    // if(image.id === "Q3"){
      image.style.transform = "translate(15em, 0)";
    // }    
  })

  console.log(image.id)
  
})

// document.addEventListener('DOMContentLoaded', function () {
//   const imageContainers = document.querySelectorAll('.image-container');
//   let containerId = null;
//   const overlay = document.getElementById('overlay');
//   const goBackButton = document.querySelector('.go-back-button'); // Select the "Go Back" button

//   function removeFlipClass() {
//     imageContainers.forEach(container => {
//       container.classList.remove('flip');
//     });
//   }

//   function toggleFlip(container) {
//     container.classList.toggle('flip');
//   }

//   imageContainers.forEach(container => {
//     container.addEventListener('click', () => {
//       console.log(container)
//       container.preventDefault();
//       overlay.style.zIndex = '5';
//       containerId = container.id;

//       // Remove the flip class from all other containers
//       removeFlipClass();

//       // Toggle the flip class on the clicked container
//       toggleFlip(container);

//       container.querySelector('img').style.opacity = '0';
//       container.style.zIndex = '10';

//       if (containerId === 'Q2') {
//         container.querySelector('.q2-text').style.display = 'block';
//       }

//       if (containerId === 'Q3') {
//         container.querySelector('.q3-text').style.display = 'block';
//         // Translate q3 and store the translation state in sessionStorage
//         container.style.transform = 'translate(15em, 0em)';
//         sessionStorage.setItem('q3Translated', 'true');
//       }
//     });

//     container.addEventListener('mouseout', () => {
//       overlay.style.zIndex = '-1';
//       container.querySelector('img').style.opacity = '1';
//       container.style.zIndex = '1';

//       if (containerId === 'Q2') {
//         container.querySelector('.q2-text').style.display = 'none';
//       }

//       if (containerId === 'Q3') {
//         container.querySelector('.q3-text').style.display = 'none';
//       }
//     });
//   });

//   // Add a click event listener to the "Go Back" button
//   goBackButton.addEventListener('click', () => {
//     // Reset the clicked container's position to its original stacked position
//     imageContainers.forEach(container => {
//       if (container.classList.contains('flip')) {
//         container.style.transform = 'translate(0, 0)';
//       }
//     });
//     // Remove the stored translation state
//     sessionStorage.removeItem('q3Translated');
//   });
// });




