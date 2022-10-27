interface ProductType {
	title: string;
	category: string;
	description: string;
	id: number;
	image: string;
	price: float;
	rating: {
		rate: float;
		count: number;
	};
}

// category
// :
// "women's clothing"
// description
// :
// "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter."
// id
// :
// 20
// image
// :
// "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
// price
// :
// 12.99
// rating
// :
// {rate: 3.6, count: 145}
// title
// :
// "DANVOUY
