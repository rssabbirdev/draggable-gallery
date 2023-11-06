import { useState } from 'react';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [items, setItems] = useState([
		{
			id: '01',
			image_src: 'images/image-1.webp',
		},
		{
			id: '02',
			image_src: 'images/image-2.webp',
		},
		{
			id: '03',
			image_src: 'images/image-3.webp',
		},
		{
			id: '04',
			image_src: 'images/image-4.webp',
		},
		{
			id: '05',
			image_src: 'images/image-5.webp',
		},
		{
			id: '06',
			image_src: 'images/image-6.webp',
		},
		{
			id: '07',
			image_src: 'images/image-7.webp',
		},
		{
			id: '08',
			image_src: 'images/image-8.webp',
		},
		{
			id: '09',
			image_src: 'images/image-9.webp',
		},
		{
			id: '10',
			image_src: 'images/image-10.jpeg',
		},
		{
			id: '11',
			image_src: 'images/image-11.jpeg',
		},
	]);
	const [selectedItems, setSelectedItems] = useState([]);
	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			<Navbar
				setItems={setItems}
				selectedItems={selectedItems}
				setSelectedItems={setSelectedItems}
			/>
			<GalleryContainer
				items={items}
				setItems={setItems}
				setSelectedItems={setSelectedItems}
				selectedItems={selectedItems}
			/>
		</div>
	);
}

export default App;
