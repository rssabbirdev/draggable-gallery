import './Navbar.css';
export default function Navbar({ selectedItems, setSelectedItems }) {
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
						<p>{selectedItems.length} Selected</p>
					</div>
					<p style={{ color: 'red', textDecoration: 'underline' }}>
						Delete All
					</p>
				</>
			) : (
				<h4>Draggable Gallery</h4>
			)}
		</div>
	);
}
