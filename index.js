
const listings = [
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97-yMrKOQEma5VzK67vF1x2rrUamSrc73kiHyyikibO9HaOQb',
		title: ' Down Town City',
		description:'The best view in the city',
		price: 3000,
		createdAt:'Jul 20',
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZDoEJkNER2Ycs7PZnfNPNVjglHExsvmDjYq1LZGmduJaYkeKHg',
		title: ' outside city ',
		description:'Good Location Close to the Center',
		price: 1500,
		createdAt:'Jul 13',
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZt3Km3L9NPa5S8jroKoovMBmAEHAP5Sgax7ipzumXh0OfbcC-kA',
		title: ' Country house',
		description:'Cant get any better deal',
		price: 2000,
		createdAt:'Jul 13',
	},
];

let searchText = '';

const render = ()=>{
	// Delets the old once and create the new list with the new apartment we added. 
	document.querySelector('ul').innerHTML = '';

	// function filter out the search input from user and find a match in the listings.
	// the first index of Title we take.
	//!searcText checks if Truthfy or false. IF the string is empty or not.
	// listings.title.includes if the word incldues.
	listings.filter(listing =>{
		if( !searchText || ( listing.title.toLowerCase().includes(searchText.toLowerCase()))) return true;
		else return false;
	})
	// Now it inplament the data to the list.
	.forEach(listing =>{
		const li = document.createElement('li');

		const img = document.createElement('img');
		img.src = listing.image;

		const container = document.createElement('div');
		container.className = 'listing-container';

		const date = document.createElement('span');
		date.innerHTML = listing.createdAt;

		const title = document.createElement('a');
		title.innerHTML = listing.title;
		title.href = '#';

		title.addEventListener('click',()=>{
			document.querySelector('.modal img').src = listing.image;
			document.querySelector('.modal h2').innerHTML = listing.title  + ' $' + listing.price;
			document.querySelector('.modal p').innerHTML = listing.description;

			document.querySelector('.shadow').style.display = 'flex';

			// for close the modal
			document.querySelector('.modal-close-button').addEventListener('click', ()=>{
				document.querySelector('.shadow').style.display = 'none';
			});

		});

		const priceContainer = document.createElement('div');
		const price = document.createElement('span');
		price.innerHTML = listing.price;

		priceContainer.appendChild(price)

		li.appendChild(img);
		container.appendChild(date);
		container.appendChild(title);
		container.appendChild(priceContainer);

		li.appendChild(container);
		document.querySelector('ul').appendChild(li);
	});
};


render();

function addListing(){

	const newTitle = document.querySelector('.add-listing-form input.title').value;

	const newPrice = document.querySelector('.add-listing-form input.price').value;

	const newImgUrl = document.querySelector('.add-listing-form input.img-url').value;


	// IF  if statment Title and price and image url are empty this function below will cut the function jump out from addListing function.
	if(!newTitle || !newPrice || !newImgUrl )return;

	const newCreatedAt = (new Date).toString().slice(4,10);

	const newListing = {
		title: newTitle,
		price: newPrice,
		image: newImgUrl,
		createdAt: newCreatedAt,
	};

	listings.push(newListing);
	render();

	// Empty the value from the input after they sent in it.
	document.querySelectorAll('.add-listing-form input').forEach(input =>{
		input.value = '';
	});
};


function search(){
	const nextSearchText = document.querySelector('input.search').value;
	searchText = nextSearchText;

	render();

}

// To close the Modal Box if the user click on the gray background.
function closeModal(event){
	const shadow = document.querySelector('.shadow');

	if(event.target == shadow)
		document.querySelector('.shadow').style.display = 'none';
}