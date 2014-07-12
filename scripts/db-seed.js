var Artist = require ('../lib/artist');

var justin = new Artist({
	name: 'Justin Bieber',
	slug: 'justin-bieber',
	albums:[
		{title: 'Believe Acoustic', year: 2013, image: 'believe-acoustic'},
		{title: 'Believe', year: 2012, image: 'believe'},
		{title: 'Under The Mistletoe', year: 2011, image: 'under-the-mistletoe'},
		{title: 'My World 2.0', year: 2010, image: 'my-world-2.0'}
	],
	shows:[
		{city: 'Bogota'},
		{city: 'Medellin'},
		{city: 'Melgar'},
		{city: 'Guadalajara'},
		{city: 'Buenos Aires'},
		{city: 'Brasilia'}
	],
});

justin.save(function(err, justin){
	console.log('Justin was save');
});

var shakira = new Artist({
	name: 'Shakira',
	slug: 'shakira',
	albums:[
		{title: 'She Wolf', year: 2009, image: 'she-wolf'},
		{title: 'Laundry Service', year: 2001, image: 'laundry-service'},
		
	],
	shows:[
		{city: 'Bogota'},
		{city: 'Medellin'},
		{city: 'Melgar'},
		{city: 'Guadalajara'},
		{city: 'Buenos Aires'},
		{city: 'Brasilia'}
	],
});

shakira.save(function(err, shakira){
	console.log('Shakira was save');
});