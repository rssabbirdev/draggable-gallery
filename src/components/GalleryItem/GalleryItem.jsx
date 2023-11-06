import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './GalleryItem.css';

export default function GalleryItem({
	item,
	index,
	setSelectedItems,
	selectedItems,
}) {
	// destructure value form useSortable hook
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id });
	
	// set default style for draggable elements
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	
	// Select function for items
	const selectFn = (event) => {
		if (event.target.checked) {
			setSelectedItems((selectedItems) => {
				return [...selectedItems, event.target.name];
			});
		} else {
			setSelectedItems((selectedItems) => {
				const leftItems = selectedItems.filter(
					(i) => i !== event.target.name
				);
				return [...leftItems];
			});
		}
	};

	return (
		<div
			className={`item ${index === 0 && 'features-item'}`}
			style={style}
			ref={setNodeRef}
			{...attributes}
			{...listeners}
		>
			<input
				className={`checkField`}
				style={
					selectedItems.find((i) => i === item.id) && {
						visibility: 'visible',
					}
				}
				id={item.id}
				name={item.id}
				type='checkbox'
				checked={selectedItems.includes(item.id)}
				onChange={(event) => selectFn(event)}
			/>
			<img
				style={
					selectedItems.find((i) => i === item.id) && {
						opacity: '0.5',
					}
				}
				className={`itemImage `}
				src={item.image_src}
			/>
		</div>
	);
}
