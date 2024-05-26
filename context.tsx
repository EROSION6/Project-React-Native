import { createContext, useState } from 'react'
import { Destination } from './constants'

type FavoritesContextType = {
	liked: boolean
	setLiked: (value: boolean) => void
	favorites: Destination[]
	handleAddFavorites: (body: Destination) => void
	handleRemoveFavorites: (id: Destination['id']) => void
}

export const Context = createContext<FavoritesContextType | null>(null)

export const AppFavorites = ({ children }: { children: React.ReactNode }) => {
	const [favorites, setFavorites] = useState<Destination[]>([])
	const [liked, setLiked] = useState<boolean>(false)

	const handleAddFavorites = (body: Destination) => {
		setFavorites([...favorites, body])
	}

	const handleRemoveFavorites = (id: Destination['id']) => {
		setFavorites(favorites.filter(f => f.id !== id))
	}

	return (
		<Context.Provider
			value={{
				liked,
				setLiked,
				favorites,
				handleAddFavorites,
				handleRemoveFavorites,
			}}
		>
			{children}
		</Context.Provider>
	)
}
