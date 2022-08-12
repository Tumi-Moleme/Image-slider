

const images = [
  "./images/africa-2-1238855-1279x888.jpg",
  "./images/african-4640824_640.jpg",
  "./images/botswana-927289_1920.jpg",
  "./images/botswana-2219380_1920.jpg",
  "./images/cheetah-1471388-1600x1200.jpg",
  "./images/elephant-4-1362028-1599x1066.jpg",
  "./images/giraffen-south-africa-1402674.jpg",
  "./images/hyena-5769873_1920.jpg",
  "./images/leopard-4649957_640.jpg",
  "./images/lion-4683920_1920.jpg",
  "./images/oryx-2693386_640.jpg",
  "./images/rhinoceros-4675919_1920.jpg",
  "./images/south-africa-163056_640.jpg"
];

const slider = document.querySelector(".slider-container");
const slide_images = document.querySelectorAll(".img");
const imgSlider = document.querySelector(".slide-img");

slide_images.forEach((img) => {
  img.addEventListener("click",() => {
    slider.style.display = "grid";
    let pic = img.childNodes[1].getAttribute("src");
    
    imgSlider.setAttribute("src", pic);
  })
});
 
const btn_next = document.querySelector(".btn-next");

btn_next.addEventListener("click", () => {
  // get selected image
  let pic = imgSlider.getAttribute("src");
  let num = nextImage(pic);
  num++;
  if (num > images.length -1) {
    
    num = 0;
  }
  imgSlider.setAttribute("src", `${images[num]}`);
});

const btn_prev = document.querySelector(".btn-prev");

btn_prev.addEventListener("click", () => {
  // get selected image
  let pic = imgSlider.getAttribute("src");
  let num = nextImage(pic);
  num--;
  if (num < 0) {
    
    num = images.length -1;
  }
  imgSlider.setAttribute("src", `${images[num]}`);
});

const btnClose = document.querySelector(".close");

btnClose.addEventListener("click", () => {
  slider.style.display = "none";
})

const nextImage = (img) => {

  for (let i = 0; i < images.length; i++) {
    if (images[i] === img) {
      return i;
    }
  }
  return null;
}