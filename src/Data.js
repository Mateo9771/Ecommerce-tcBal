const products = [
	{
		id: '1',
		name: 'Iphone 11',
		price: 750000,
		category:'celular',
		img: 'https://http2.mlstatic.com/D_NQ_NP_760723-MLA46115014347_052021-O.webp',
		stock: 10,
		
	},
	{
		id: '2',
		name: 'Motorola Edge 40',
		price: 450000,
		category:'notebook',
		img: 'https://http2.mlstatic.com/D_NQ_NP_730290-MLU74557975371_022024-O.webp',
		stock: 12,
	},
	{
		id: '3',
		name: 'Samsung  Galaxy A15',
		price: 500000,
		category:'tablet',
		img: 'https://http2.mlstatic.com/D_NQ_NP_608851-MLA75172421062_032024-O.webp',
		stock: 15,
	},
	{
		id: '1',
		name: 'Iphone 11',
		price: 750000,
		category:'celular',
		img: 'https://http2.mlstatic.com/D_NQ_NP_760723-MLA46115014347_052021-O.webp',
		stock: 10,
		
	},
	{
		id: '2',
		name: 'Motorola Edge 40',
		price: 450000,
		category:'notebook',
		img: 'https://http2.mlstatic.com/D_NQ_NP_730290-MLU74557975371_022024-O.webp',
		stock: 12,
	},

	// agregar mas imagenes
]

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() =>{
			resolve(products)
		},500 )
	})
}

export const getProductById = (productId) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products.find(prod => prod.id === productId))
		},200 )
	})
}

//corregir esta funcion
export const getProductsByCategory = (productCategory) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products.filter(prod => prod.category === productCategory ))
		}, 100)
	})
}