const cSlide= document.querySelector('.carousel-slide');
const cImage= document.querySelectorAll('.carousel-slide img')
const prev= document.querySelector('#prevBtn');
const next= document.querySelector('#nextBtn');


let  counter =1;
const size= cImage[0].clientWidth;

cSlide.style.transform='translateX(' + (-size * counter) + 'px)';

// button Listeners
next.addEventListener('click', ()=>{
	if(counter >= cImage.length -1)return;
	cSlide.style.transition = 'transform 0.4s ease-in-out';
	counter++
	cSlide.style.transform= 'translateX(' + (-size * counter) + 'px)';
	console.log(counter)
});

prev.addEventListener('click', ()=>{
	if(counter <= 0)return;
	cSlide.style.transition = 'transform 0.4s ease-in-out';
	counter--
	cSlide.style.transform= 'translateX(' + (-size * counter) + 'px)';
	console.log(counter)
});

cSlide.addEventListener('transitionend',()=>{
	if(cImage[counter].id === 'lastClone'){
		cSlide.style.transition= "none";
		counter= cImage.length -2;
		cSlide.style.transform= 'translateX(' + (-size * counter) + 'px)';
	}
	if(cImage[counter].id === 'firstClone'){
		cSlide.style.transition= "none";
		counter= cImage.length -counter;
		cSlide.style.transform= 'translateX(' + (-size * counter) + 'px)';
	}
})