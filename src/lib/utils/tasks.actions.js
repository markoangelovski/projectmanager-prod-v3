import {
  getTasksDocsCall,
  editTaskCall
} from "../drivers/Tasks/tasks.driver.js";

const getTaskDocs = async (actions, payload) => {
  try {
    const res = await getTasksDocsCall(payload);
    if (!res.error) {
      actions.setTaskDocs(res.docs);
      actions.setHasMoreTaskDocs(res.stats);
    }
  } catch (error) {
    console.warn(error);
  }
};

const setTaskDocs = (state, docs) => {
  state.taskDocsSkip += 50;
  state.taskDocs = [...state.taskDocs, ...docs];
};

const filterTaskDocs = (state, keyword) => {
  const rgx = new RegExp(keyword, "i");
  state.filteredTaskDocs =
    keyword.length > 2
      ? state.taskDocs.filter(
          task =>
            rgx.test(task.pl) ||
            rgx.test(task.title) ||
            rgx.test(task.description) ||
            rgx.test(task.kanboard)
        )
      : [];
};

const resetTaskDocs = state => {
  state.taskDocsSkip = 0;
  state.taskDocs = [];
};

const setHasMoreTaskDocs = (state, stats) => {
  state.hasMoreTaskDocs = stats.remaining ? true : false;
};

const editTask = async (actions, { taskId, payload }) => {
  try {
    const res = await editTaskCall(taskId, payload);

    if (!res.error) {
      actions.updateTaskDocs({ taskId, payload });
    }
  } catch (error) {
    console.warn(error);
  }
};

const updateTaskDocs = (state, { taskId, payload }) => {
  // Extract values - payload=[{propName: "title", propValue: "Updated title"}, {propName: "done", propValue: "false"}];
  const updateVals = payload.reduce((acc, current) => {
    // When updating the Task Due Date, the Date timestamp is passed as string. We need to convert it back to number.
    const valueIsTimestamp = parseInt(current.propValue);
    if (valueIsTimestamp) {
      acc[current.propName] = valueIsTimestamp;
    } else {
      acc[current.propName] = current.propValue;
    }
    return acc;
  }, {});

  // Change string done:"true" or "false" to boolean true or false
  updateVals.done = updateVals.done === "true";

  // Update the new event values in state
  state.taskDocs = state.taskDocs.map(taskDoc => {
    if (taskDoc._id === taskId) return { ...taskDoc, ...updateVals };
    return taskDoc;
  });
};

export {
  getTaskDocs,
  setTaskDocs,
  filterTaskDocs,
  resetTaskDocs,
  setHasMoreTaskDocs,
  editTask,
  updateTaskDocs
};
