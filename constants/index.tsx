import { ImageSourcePropType } from 'react-native'

type Categories = {
	title: string
	image: ImageSourcePropType | undefined
}

export type Destination = {
	id: number
	title: string
	duration: string
	distance: string
	weather: string
	price: number
	shortDescription: string
	longDescription: string
	image: ImageSourcePropType | undefined
}

export const categoriesData: Categories[] = [
	{ title: 'Ocean', image: require('../assets/images/Ocean.jpg') },
	{ title: 'Mountain', image: require('../assets/images/Mountain.jpg') },
	{ title: 'Camp', image: require('../assets/images/Camp.jpg') },
	{ title: 'Sunset', image: require('../assets/images/Sunset.jpg') },
	{ title: 'Hiking', image: require('../assets/images/Hiking.jpg') },
	{ title: 'Beach', image: require('../assets/images/Beach.jpg') },
	{ title: 'Forest', image: require('../assets/images/Forest.jpg') },
]

export const sortCategories: string[] = [
	'All',
	'Popular',
	'Recommended',
	'More',
]

export const destinationData: Destination[] = [
	{
		id: 0,
		title: 'Isnalnd',
		duration: '7days',
		distance: '450 KM',
		weather: '30 C',
		price: 3000,
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur ,adipisicing elit. Error, quam!',
		longDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Error, quam!',
		image: require('../assets/images/Forest.jpg'),
	},
	{
		id: 1,
		title: 'Isnalnd',
		duration: '3days',
		distance: '410 KM',
		weather: '31 C',
		price: 3000,
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur ,adipisicing elit. Error, quam!',
		longDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Error, quam!',
		image: require('../assets/images/pink-nature-landscape-with-vegetation-and-flora.jpg'),
	},
	{
		id: 2,
		title: 'Isnalnd',
		duration: '5days',
		distance: '350 KM',
		weather: '24 C',
		price: 3000,
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur ,adipisicing elit. Error, quam!',
		longDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Error, quam!',
		image: require('../assets/images/lifestyle-summer-scene-with-cartoon-design.jpg'),
	},
	{
		id: 3,
		title: 'Isnalnd',
		duration: '2days',
		distance: '260 KM',
		weather: '26 C',
		price: 3000,
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur ,adipisicing elit. Error, quam!',
		longDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Error, quam!',
		image: require('../assets/images/anime-style-clouds.jpg'),
	},
]
