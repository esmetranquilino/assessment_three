console.log("hello world");

function mouse(){
	alert('You are smart!')
}
document.querySelector('#image').addEventListener('mouseover', mouse)


function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Your form was submitted successfully!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
