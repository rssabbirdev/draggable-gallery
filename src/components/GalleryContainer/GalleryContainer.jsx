import { useMemo, useState } from 'react';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	rectSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import GalleryItem from '../GalleryItem/GalleryItem';

// eslint-disable-next-line react/prop-types
export default function GalleryContainer({ setSelectedItems, selectedItems }) {
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
	// with useMemo we are separate ItemIds from array of objects
	const itemIds = useMemo(() => items.map((item) => item.id), [items]);

	const sensors = useSensors(
		useSensor(MyPointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext items={itemIds} strategy={rectSortingStrategy}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'auto auto auto auto auto',
					}}
				>
					{items.map((item, index) => (
						<GalleryItem
							selectedItems={selectedItems}
							setSelectedItems={setSelectedItems}
							item={item}
							key={item.id}
							index={index}
						/>
					))}
				</div>
			</SortableContext>
		</DndContext>
	);

	function handleDragEnd(event) {
		const { active, over } = event;
		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.findIndex(
					(item) => item.id === active.id
				);
				const newIndex = items.findIndex((item) => item.id === over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}
}



class MyPointerSensor extends PointerSensor {
	static activators = [
		{
			eventName: 'onPointerDown',
			handler: ({ nativeEvent: event }) => {
				if (
					!event.isPrimary ||
					event.button !== 0 ||
					isInteractiveElement(event.target)
				) {
					return false;
				}

				return true;
			},
		},
	];
}

function isInteractiveElement(element) {
	const interactiveElements = [
		'button',
		'input',
		'textarea',
		'select',
		'option',
	];

	if (interactiveElements.includes(element.tagName.toLowerCase())) {
		return true;
	}

	return false;
}