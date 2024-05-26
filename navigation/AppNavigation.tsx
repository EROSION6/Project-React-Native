import { AppFavorites } from '@/context'
import DestinationScreens from '@/pages/DestinationScreens'
import FavoritesScreens from '@/pages/FavoritesScreens'
import HomeScreens from '@/pages/HomeScreens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import WelcomeScreens from '../pages/WelcomeScreens'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
	return (
		<AppFavorites>
			<Stack.Navigator
				initialRouteName='Welcome'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name='Home' component={HomeScreens} />
				<Stack.Screen name='Welcome' component={WelcomeScreens} />
				<Stack.Screen name='Destinations' component={DestinationScreens} />
				<Stack.Screen name='Favorites' component={FavoritesScreens} />
			</Stack.Navigator>
		</AppFavorites>
	)
}
