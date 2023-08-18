function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

document.getElementById("confetti-button").addEventListener("click", function() {
  confetti();
});

const img = document.querySelector('img');
const infoBlock = document.querySelector('.info-block');

img.addEventListener('mouseover', () => {
  infoBlock.style.opacity = 1;
});

img.addEventListener('mouseout', () => {
  infoBlock.style.opacity = 0;
});
