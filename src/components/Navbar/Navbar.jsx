export default function Navbar({ selectedItems, setSelectedItems, setItems }) {
	// delete selected items function
	const handleDelete = () => {
		setItems((items) => {
			const leftItems = items.filter(
				(item) => !selectedItems.includes(item.id)
			);
			return leftItems;
		});
		setSelectedItems([]);
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
						<input type='checkbox' checked={true} onChange={()=>setSelectedItems([])} />
						<h3>{selectedItems.length} File Selected</h3>
					</div>
					<button
						onClick={handleDelete}
						style={{
							color: 'red',
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							fontSize:'1.1rem'
						}}
					>
						Delete files
					</button>
				</>
			) : (
				<>
					<h3>Draggable Gallery</h3>
				</>
			)}
		</div>
	);
}
