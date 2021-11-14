
// Icons 
import { MdOutlineDoneOutline } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';

const TaskItem = ({ text, status }) => {
    return (
        <p className="mb-1 ms-3">
            { text }
            {status === "done" &&
                <span className="text-wrap badge bg-success bg-gradient ms-1 ">
                    <MdOutlineDoneOutline size={17} /> 
                </span> ||
                status === "undone" &&
                <span className="text-wrap badge bg-warning bg-gradient ms-1">
                    <GiSandsOfTime size={17} /> 
                </span> 

            }
        </p>
    );
};

export default TaskItem;