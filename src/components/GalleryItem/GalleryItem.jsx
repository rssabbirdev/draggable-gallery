import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function GalleryItem({ item, index }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		width: '150px',
		background: 'white',
		margin: '10px',
		borderRadius: '10px',
	};
	const styleTwo = {
		transform: CSS.Transform.toString(transform),
		transition,
		gridRowStart: 'span 2',
		gridColumnEnd: 'span 2',
		width: '300px',
		background: 'white',
		padding: '5px',
		borderRadius: '10px',
	};
	return (
		<img
			ref={setNodeRef}
			style={index === 0 ? styleTwo : style}
			{...attributes}
			{...listeners}
			src={item.image_src}
		/>
	);
}
