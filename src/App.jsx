import { useState } from 'react';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [selectedItems, setSelectedItems] = useState([]);
	console.log(selectedItems);
	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			<Navbar
				selectedItems={selectedItems}
				setSelectedItems={setSelectedItems}
			/>
			<GalleryContainer
				setSelectedItems={setSelectedItems}
				selectedItems={selectedItems}
			/>
		</div>
	);
}

export default App;
