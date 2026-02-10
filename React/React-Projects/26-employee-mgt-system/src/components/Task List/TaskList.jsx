import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id="task-list" className="h-[60%] mt-13 flex items-center gap-5 overflow-x-auto flex-nowrap">
     {data.tasks.map((elem, index) => {
       if(elem.newTask){
        return <NewTask key={index} data={elem} />
       }
       if(elem.active){
        return <AcceptTask key={index} data={elem} />
       }
       if(elem.completed){
        return <CompleteTask key={index} data={elem} />
       }
       if(elem.failed){
        return <FailedTask key={index} data={elem} />
       }
       return null;
     })}
    </div>
  );
};

export default TaskList;