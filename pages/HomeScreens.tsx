import Categories from '@/components/Categories'
import Destinations from '@/components/Destinations'
import SortCategories from '@/components/SortCategories'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'

import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function HomeScreens() {
	const navigation = useNavigation()

	return (
		<SafeAreaView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					paddingHorizontal: 10,
					backgroundColor: 'white',
				}}
			>
				<View style={styles.avatar}>
					<Text style={styles.textAvatar}>Let's Discover</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: 5,
							alignItems: 'center',
						}}
					>
						<TouchableOpacity>
							<Image
								source={require('../assets/images/avatar.jpg')}
								style={{ width: wp(10), height: wp(10), borderRadius: 100 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
							<HeartIcon size={wp(10)} color='#ff3939d3' />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.search}>
					<View style={styles.block}>
						<MagnifyingGlassIcon size={20} strokeWidth={3} color='#6c757d' />
						<TextInput
							placeholder='Search destination'
							placeholderTextColor={'#6c757d'}
							style={styles.input}
						/>
					</View>
				</View>
				<View style={{ marginBottom: 16 }}>
					<Categories />
				</View>
				<View style={{ marginBottom: 16 }}>
					<SortCategories />
				</View>
				<View>
					<Destinations />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	avatar: {
		marginHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
	textAvatar: {
		fontWeight: 'bold',
		color: '#6c757d',
		fontSize: wp(7),
	},
	search: { marginVertical: 5, marginHorizontal: 4 },
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 100,
		padding: 12,
		marginHorizontal: 2,
		paddingLeft: 12,
		borderColor: '#9597994e',
		borderWidth: 1,
	},
	input: {
		flex: 1,
		marginHorizontal: 5,
		paddingLeft: 4,
	},
})
