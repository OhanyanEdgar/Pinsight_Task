// Important
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from "react";
// Components
import User from "./User"

const DraggableUsers = ({users, setCurrentUsers}) => {

    const [draggableUsers, setDraggableUsers] = useState(users);

    const handleOnDragEnd = (result) => {
        if(!result.destination) return;
        const tempUsers = Array.from(draggableUsers);
        const [reorderedItem] = tempUsers.splice(result.source.index, 1);
        tempUsers.splice(result.destination.index, 0, reorderedItem);

        setDraggableUsers(tempUsers);
    }

    useEffect(() => {
        setDraggableUsers(users);
    }, [users]);

    // // Error: Infinite loop. Try to brake it when componentWillMount
    // useEffect(() => {
    //     // This hook acts like componentWillUnmount to pass D&D changes up to user list.
    //     // In case if the App User changed user list by D&D and decided to disable D&D function,
    //     // the user list may keep D&D manipulation, thanks to this hook.
    //     return () => setCurrentUsers(draggableUsers);
    // });

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