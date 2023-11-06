import { useState } from 'react';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);
	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			<Navbar />
      <GalleryContainer setSelectedItems={setSelectedItems} />
		</div>
	);
}

export default App;
