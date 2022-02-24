var $car = document.querySelector('#car');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'up';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'down';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'left';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'right';
  }
});
