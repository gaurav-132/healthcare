const slides = document.querySelectorAll(".carausel");

var counter = 0;
console.log(slides);

slides.forEach(
	(slide, index) =>{
		slide.style.left = `${index * 100}%`
	}
)

const goNext = () =>{
	counter++;
	slideImage();
}

const goPrev = () =>{
	counter--;
	slideImage();
}

const slideImage = () =>{
	slides.forEach(
		(slide) => {
			slide.style.transform = `translateX(-${counter * 100}%)`
		}
	)
}