import { Destination, destinationData } from '@/constants'
import { Context } from '@/context'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useContext, useState } from 'react'
import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function Destinations() {
	return (
		<View style={styles.container}>
			{destinationData.map(dest => (
				<DestinationCard key={dest.price} dest={dest} />
			))}
		</View>
	)
}

type Props = {
	dest: Destination
}

function DestinationCard({ dest }: Props) {
	const navigation = useNavigation()
	const context = useContext(Context)

	if (!context) {
		console.error('Context is not available in this component')
		return null
	}

	const { handleAddFavorites, favorites, handleRemoveFavorites } = context

	const [liked, setLiked] = useState<boolean>(
		favorites.some(f => f.id === dest.id)
	)

	const handleHeart = () => {
		if (liked) {
			Alert.alert('Are you sure you want to remove this card from likes?')
			handleRemoveFavorites(dest.id)
			setLiked(false)
		} else {
			handleAddFavorites(dest)
			setLiked(true)
		}
	}

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Destinations', { ...dest })}
			style={styles.card}
		>
			<Image
				source={dest.image}
				style={{
					width: wp(44),
					height: wp(65),
					position: 'absolute',
					borderRadius: 35,
				}}
			/>
			<LinearGradient
				colors={['transparent', 'rgba(0,0,0,0.8)']}
				style={{
					width: wp(44),
					height: hp(15),
					position: 'absolute',
					bottom: 0,
					borderRadius: 35,
				}}
				start={{ x: 0.5, y: 0.5 }}
				end={{ x: 0.5, y: 1 }}
			/>

			<TouchableOpacity onPress={handleHeart} style={styles.heart}>
				<HeartIcon size={wp(5)} color={!liked ? 'white' : 'red'} />
			</TouchableOpacity>

			<Text style={{ color: 'white', fontWeight: 'semibold', fontSize: wp(4) }}>
				{dest.title}
			</Text>
			<Text style={{ color: 'white', fontSize: wp(2.2) }}>
				{dest.shortDescription}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	card: {
		width: wp(44),
		height: wp(65),
		display: 'flex',
		justifyContent: 'flex-end',
		position: 'relative',
		padding: 12,
		paddingVertical: 24,
		marginBottom: 17,
	},
	heart: {
		position: 'absolute',
		top: 12,
		right: 14,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		padding: 4,
	},
})
