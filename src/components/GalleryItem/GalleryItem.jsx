import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './GalleryItem.css';
// eslint-disable-next-line react/prop-types
export default function GalleryItem({ item, index, setSelectedItems }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		// eslint-disable-next-line react/prop-types
		useSortable({ id: item.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	const selectFn = (event,selectedItem) => {
		if (event.target.checked) {
			setSelectedItems(selectedItems => {
				return [...selectedItems, selectedItem]
			})
		} else {
			setSelectedItems(selectedItems => {
				const leftItems = selectedItems.filter(i => i.id !== event.target.name);
				return [...leftItems]
			})
		}
	};

	return (
		<div
			className={`item ${index === 0 && 'first-item'}`} style={style} ref={setNodeRef} {...attributes} {...listeners} >
			<input
				style={{ margin: '10px', position:'absolute' }}
				// eslint-disable-next-line react/prop-types
				id={item.id}
				// eslint-disable-next-line react/prop-types
				name={item.id}
				type='checkbox'
				onChange={(event)=>selectFn(event,item)}
			/>
			<img
				style={{ width: '100%' }}
				// eslint-disable-next-line react/prop-types
				src={item.image_src}
			/>
		</div>
	);
}
