import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function WelcomeScreens() {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/img1.akspic.ru-illustracia-nebo-grafika-cifrovoe_iskusstvo-prirodnyj_landshaft-2698x3434.jpg')}
				style={styles.images}
			/>
			<View style={styles.contentText}>
				<LinearGradient
					colors={['transparent', 'rgba(17, 173, 178, 0.879)']}
					style={{
						width: wp(100),
						height: hp(100),
						position: 'absolute',
						bottom: 0,
					}}
					start={{ x: 0.5, y: 0.5 }}
					end={{ x: 0.5, y: 1 }}
				/>
				<View style={{ marginTop: 3, marginBottom: 3 }}>
					<Text style={styles.title}>Traveling mode easy!</Text>
					<Text style={styles.titleBottom}>
						Experience the world's best adventure around the world with us
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Home')}
				>
					<Text
						style={{ color: 'white', fontSize: wp(5.5), textAlign: 'center' }}
					>
						Let's go
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	images: {
		height: '100%',
		width: '100%',
		position: 'absolute',
	},
	contentText: {
		padding: 20,
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: wp(10),
		paddingBottom: 3,
	},
	titleBottom: {
		color: 'white',
		fontSize: wp(3),
	},
	button: {
		backgroundColor: 'orange',
		paddingVertical: 12,
		paddingHorizontal: 21,
		borderRadius: 100,
		marginTop: 20,
	},
})
