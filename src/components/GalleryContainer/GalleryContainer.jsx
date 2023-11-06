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

export default function GalleryContainer() {
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
	console.log(itemIds);
	const sensors = useSensors(
		useSensor(PointerSensor),
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
						<GalleryItem item={item} key={item.id} index={index} />
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
				console.log(oldIndex, newIndex);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}
}
