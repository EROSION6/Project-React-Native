import { sortCategories } from '@/constants'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default function SortCategories() {
	const [active, setActive] = useState<number>(0)

	return (
		<View style={styles.block}>
			{sortCategories.map((sort, i) => {
				const isActive = active === i ? '#f97316' : '#6c757d'

				return (
					<TouchableOpacity
						style={{ shadowColor: isActive }}
						onPress={() => setActive(i)}
						key={i}
					>
						<Text
							style={{
								fontWeight: 'semibold',
								fontSize: wp(4),
								color: isActive,
							}}
						>
							{sort}
						</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		display: 'flex',
		justifyContent: 'space-around',
		marginHorizontal: 4,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#9597994e',
		borderStyle: 'solid',
		borderRadius: 100,
		padding: 12,
		flexDirection: 'row',
	},
	sort: {
		display: 'flex',
		padding: 4,
		paddingHorizontal: 4,
		borderRadius: 100,
	},
})
