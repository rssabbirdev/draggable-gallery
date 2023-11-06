import './Navbar.css';
export default function Navbar({ selectedItems, setSelectedItems, setItems }) {
	const handleDelete = () => {
		setItems((items) => {
			const leftItems = items.filter((item) => !selectedItems.includes(item.id));
			return leftItems;
		});
		setSelectedItems([])
	};
	return (
		<div
			style={{
				borderBottom: '1px solid gray',
				padding: '10px',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			{selectedItems.length > 0 ? (
				<>
					<div style={{ display: 'flex', gap: '3px' }}>
						<input type='checkbox' checked />
						<h4>{selectedItems.length} Selected</h4>
					</div>
					<button
						onClick={handleDelete}
						style={{
							color: 'red',
							textDecoration: 'underline',
							background: 'none',
							border: 'none',
							cursor: 'pointer',
						}}
					>
						Delete All
					</button>
				</>
			) : (
				<h4>Draggable Gallery</h4>
			)}
		</div>
	);
}
