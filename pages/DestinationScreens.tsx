import { Context } from '@/context'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import {
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { ChevronLeftIcon, ClockIcon } from 'react-native-heroicons/outline'
import { HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DestinationScreens({ route }: { route: any }) {
	const dest = route.params
	const navigation = useNavigation()
	const [isFavorite, setFavorite] = useState<boolean>(false)
	const context = useContext(Context)

	if (!context) {
		console.error('Context is not available in this component')
		return null
	}

	const { handleAddFavorites } = context

	const handleFavorites = () => {
		handleAddFavorites(dest)
		setFavorite(!isFavorite)
	}

	return (
		<View style={styles.card}>
			<Image source={dest.image} style={{ width: wp(100), height: hp(55) }} />
			<StatusBar barStyle={'light-content'} />
			<SafeAreaView style={styles.blockButton}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.btn}
				>
					<ChevronLeftIcon size={wp(7)} strokeWidth={4} color='white' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleFavorites()} style={styles.btn}>
					<HeartIcon
						size={wp(7)}
						strokeWidth={4}
						color={!isFavorite ? 'white' : 'red'}
					/>
				</TouchableOpacity>
			</SafeAreaView>

			<View style={styles.content}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ marginVertical: 20 }}
				>
					<View style={styles.blockText}>
						<Text
							style={{
								fontWeight: 'bold',
								flex: 1,
								color: '#6c757d',
								fontSize: wp(7),
							}}
						>
							{' '}
							{dest?.title}
						</Text>
						<Text
							style={{
								color: '#f97316',
								fontSize: wp(7),
								fontWeight: 'semibold',
							}}
						>
							$ {dest?.price}
						</Text>
					</View>
					<Text
						style={{ fontSize: wp(3.7), color: '#6c757d', marginBottom: 12 }}
					>
						{dest?.longDescription}
					</Text>
					<View style={styles.contentIcons}>
						<View style={styles.icons}>
							<ClockIcon size={wp(7)} color='skyblue' />
							<View style={{ display: 'flex', marginHorizontal: 3 }}>
								<Text
									style={{
										fontWeight: 'bold',
										color: '#6c757d',
										fontSize: wp(4.5),
									}}
								>
									{dest?.duration}
								</Text>
								<Text style={{ color: '#6c757d', fontSize: wp(3.5) }}>
									Deration
								</Text>
							</View>
						</View>

						<View style={styles.icons}>
							<MapPinIcon size={wp(7)} color='#f87171' />
							<View style={{ display: 'flex', marginHorizontal: 3 }}>
								<Text
									style={{
										fontWeight: 'bold',
										color: '#6c757d',
										fontSize: wp(4.5),
									}}
								>
									{dest?.duration}
								</Text>
								<Text style={{ color: '#6c757d', fontSize: wp(3.5) }}>
									Distance
								</Text>
							</View>
						</View>

						<View style={styles.icons}>
							<SunIcon size={wp(7)} color='orange' />
							<View style={{ display: 'flex', marginHorizontal: 3 }}>
								<Text
									style={{
										fontWeight: 'bold',
										color: '#6c757d',
										fontSize: wp(4.5),
									}}
								>
									{dest?.duration}
								</Text>
								<Text style={{ color: '#6c757d', fontSize: wp(3.5) }}>
									Sunny
								</Text>
							</View>
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity style={styles.button}>
					<Text style={{ color: 'white', fontWeight: 'bold' }}>Book now</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		flex: 1,
	},
	blockButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		position: 'absolute',
	},
	btn: {
		padding: 8,
		borderRadius: 100,
		marginHorizontal: 21,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
	},
	content: {
		paddingHorizontal: 26,
		display: 'flex',
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		paddingTop: 8,
		marginTop: -34,
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
	},
	blockText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	contentIcons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 2,
	},
	icons: {
		flexDirection: 'row',
		marginHorizontal: 2,
	},
	button: {
		marginBottom: 6,
		marginVertical: 'auto',
		marginHorizontal: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#f97316',
		height: wp(15),
		width: wp(50),
	},
})
