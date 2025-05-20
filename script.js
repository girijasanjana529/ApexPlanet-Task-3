const images = [
  "https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg",
  "https://st2.depositphotos.com/1591133/8812/i/450/depositphotos_88120646-stock-photo-idyllic-summer-landscape-with-clear.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT06fsYGOm1BT3GRrRFHFWEes7HirWztpuihcHg3QB75FZfiU5TaikqzqVDB5BgHkqdg&usqp=CAU"
];

let currentIndex = 0;

function showImage(index) {
  const imgElement = document.getElementById("carouselImage");
  imgElement.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
