const listings = [
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97-yMrKOQEma5VzK67vF1x2rrUamSrc73kiHyyikibO9HaOQb',
		title: ' Down Town City',
		price: 3000,
		createdAt:'Jul 20',
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZDoEJkNER2Ycs7PZnfNPNVjglHExsvmDjYq1LZGmduJaYkeKHg',
		title: ' outside city ',
		price: 1500,
		createdAt:'Jul 13',
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZt3Km3L9NPa5S8jroKoovMBmAEHAP5Sgax7ipzumXh0OfbcC-kA',
		title: ' Country house',
		price: 2000,
		createdAt:'Jul 13',
	},
];

const render = ()=>{
	// Delets the old once and create the new list with the new apartment we added. 
	document.querySelector('ul').innerHTML = '';
	listings.forEach(listing =>{
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

