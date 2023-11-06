import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './GalleryItem.css';
// eslint-disable-next-line react/prop-types
export default function GalleryItem({ item, index, setSelectedItems, selectedItems }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		// eslint-disable-next-line react/prop-types
		useSortable({ id: item.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	const selectFn = (event) => {
		console.log('Clicking on');
		if (event.target.checked) {
			setSelectedItems(selectedItems => {
				return [...selectedItems, event.target.name]
			})
		} else {
			setSelectedItems(selectedItems => {
				const leftItems = selectedItems.filter(i => i !== event.target.name);
				return [...leftItems]
			})
		}
	};

	return (
		<div
			className={`item ${index === 0 && 'first-item'} item`}
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
				// eslint-disable-next-line react/prop-types
				id={item.id}
				// eslint-disable-next-line react/prop-types
				name={item.id}
				type='checkbox'
				onChange={(event) => selectFn(event)}
			/>
			<img
				style={
					selectedItems.find((i) => i === item.id) && {
						opacity: '0.5',
					}
				}
				className={`itemImage `}
				// eslint-disable-next-line react/prop-types
				src={item.image_src}
			/>
		</div>
	);
}
