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
import {
	ArchiveBoxIcon,
	ChevronRightIcon,
} from 'react-native-heroicons/outline'
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
		<View
			style={{
				width: wp(100),
				height: hp(100),
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: wp(2),
			}}
		>
			<Text style={styles.emptyTitle}>It's empty here</Text>
			<ArchiveBoxIcon size={wp(10)} color='#f87171' />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.goBack()}
			>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>Сome back </Text>
				<ChevronRightIcon size={wp(7)} strokeWidth={3} color='white' />
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
	emptyTitle: {
		fontWeight: 'bold',
		color: '#f87171',
		fontSize: wp(10),
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 100,
		backgroundColor: '#f97316',
		padding: 12,
	},
})
