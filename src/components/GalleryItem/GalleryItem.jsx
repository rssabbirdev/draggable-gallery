import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// eslint-disable-next-line react/prop-types
export default function GalleryItem({ item, index, setSelectedItems }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		// eslint-disable-next-line react/prop-types
		useSortable({ id: item.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		width: '200px',
		background: 'white',
		margin: '10px',
        borderRadius: '10px',
        cursor:'pointer'
	};
	const styleTwo = {
		transform: CSS.Transform.toString(transform),
		transition,
		gridRowStart: 'span 2',
		gridColumnEnd: 'span 2',
		width: '410px',
		background: 'white',
		margin: '10px',
		borderRadius: '10px',
		cursor: 'pointer',
    };
	const selectFn = () => {
        setSelectedItems((selectedItems) => {
            return [...selectedItems, item]
        })
	};
	return (
		<img
			onClick={() => selectFn()}
			ref={setNodeRef}
			style={index === 0 ? styleTwo : style }
			{...attributes}
			{...listeners}
			// eslint-disable-next-line react/prop-types
			src={item.image_src}
		/>
	);
}
