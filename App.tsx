import { StyleSheet, Text, View } from 'react-native'
import Header from '@/components/Header'

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
