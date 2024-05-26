import FavoritesCard from '@/components/FavotitesCard'
import { Destination } from '@/constants'
import { Context } from '@/context'
import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { ArchiveBoxIcon } from 'react-native-heroicons/outline'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function FavoritesScreens() {
	const context = useContext(Context)
	const navigation = useNavigation()

	if (!context) {
		console.error('Context is not available in this component')
		return null
	}

	const { favorites } = context

	return (
		<View
			style={{
				padding: 5,
				backgroundColor: 'white',
				width: wp(100),
				height: hp(100),
			}}
		>
			<Text style={styles.title}>Favorites</Text>
			{favorites.length > 0 ? (
				<ScrollView
					style={{ paddingVertical: 10 }}
					showsHorizontalScrollIndicator={false}
				>
					{favorites.map((fav: Destination) => (
						<FavoritesCard key={fav.id} {...fav} />
					))}
				</ScrollView>
			) : (
				<Empty navigation={navigation} />
			)}
		</View>
	)
}

const Empty = ({ navigation }: any) => {
	return (
		<View>
			<Text>It's empty here</Text>
			<ArchiveBoxIcon />
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text>Сome back</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		color: '#6c757d',
		fontSize: wp(7),
	},
})
