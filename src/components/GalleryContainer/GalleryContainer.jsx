import { useMemo } from 'react';
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
export default function GalleryContainer({ setSelectedItems, selectedItems, items,setItems }) {
	
	// with useMemo we are separate ItemIds from array of objects
	const itemIds = useMemo(() => items.map((item) => item.id), [items]);
	
	// dndKit sensors setting
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

	// define what to do, if draggable item drop on SortableContext for sorting and dragging
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


// Customize PointerSensor
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

// define which elements don't get effected for dndkit 
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