import { categoriesData } from '@/constants'
import React from 'react'
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Categories() {
	return (
		<View style={{ marginVertical: 5 }}>
			<View style={styles.categories}>
				<Text style={{ fontSize: wp(4), color: '#6c757d' }}>Categories</Text>
				<TouchableOpacity>
					<Text style={{ fontSize: wp(4), color: '#f97316' }}>See all</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 2 }}
				style={{ marginHorizontal: 1 }}
				showsHorizontalScrollIndicator={false}
			>
				{categoriesData.map((cat, i) => (
					<TouchableOpacity
						key={i}
						style={{
							display: 'flex',
							alignItems: 'center',
							marginHorizontal: 3,
						}}
					>
						<Image
							source={cat.image}
							style={{ width: wp(20), height: wp(19), borderRadius: 18 }}
						/>
						<Text style={styles.title}>{cat.title}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	categories: {
		marginVertical: 10,
		marginHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		color: '#6c757d',
		fontSize: wp(3),
	},
})
