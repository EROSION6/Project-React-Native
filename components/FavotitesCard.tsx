import { Destination } from '@/constants'
import { Context } from '@/context'
import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function FavoritesCard({ id, image }: Destination) {
	const context = useContext(Context)

	if (!context) {
		console.error('Context is not available in this component')
		return null
	}

	const { handleRemoveFavorites } = context

	const handleRemoved = (id: Destination['id']) => {
		handleRemoveFavorites(id)
	}

	return (
		<View style={{ marginBottom: 5 }}>
			<Image
				source={image}
				style={{
					width: wp(95),
					height: hp(20),
					borderRadius: 20,
				}}
			/>
			<TouchableOpacity onPress={() => handleRemoved(id)} style={styles.heart}>
				<HeartIcon size={wp(7)} color='red' />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	heart: {
		position: 'absolute',
		top: 12,
		right: 14,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		padding: 4,
	},
})
