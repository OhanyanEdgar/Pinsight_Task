// Important
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from "react";
// Components
import User from "./User"

const DraggableUsers = ({users}) => {

    const [draggableUsers, setDraggableUsers] = useState(users);

    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        const tempUsers = Array.from(draggableUsers);
        const [reorderedItem] = tempUsers.splice(result.source.index, 1);
        tempUsers.splice(result.destination.index, 0, reorderedItem);

        setDraggableUsers(tempUsers);
    }

    useEffect(() => {
        setDraggableUsers(users)
    }, [users]);

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="draggableUsers">
                {(provided) => (
                    <div className="draggableUsers" {...provided.droppableProps} ref={provided.innerRef}>
                        {draggableUsers.map((user, index) => {
                            return (
                                <Draggable key={user.id.toString()} draggableId={user.id.toString()} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <User user={user} />
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default DraggableUsers;