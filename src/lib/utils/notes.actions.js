import {
  postNoteCall,
  editNoteCall,
  deleteNoteCall
} from "../drivers/Notes/notes.driver.js";

const updateTaskDocsWhenNoteCreated = (state, note) => {
  state.taskDocs = state.taskDocs.map(task => {
    if (task._id === note.task) {
      task.notes.push(note);
    }
    return task;
  });
};

const postNote = async (actions, payload) => {
  try {
    const res = await postNoteCall(payload);
    if (!res.error) {
      actions.updateTaskDocsWhenNoteCreated(res.note);
    }
  } catch (error) {
    console.warn(error);
  }
};

const updateTaskDocsWhenNoteEdited = (state, note) => {
  state.taskDocs = state.taskDocs.map(task => {
    if (task._id === note.task) {
      task.notes = task.notes.map(oldNote =>
        oldNote._id === note._id ? { ...oldNote, ...note } : oldNote
      );
    }
    return task;
  });
};

const editNote = async (actions, payload) => {
  try {
    const res = await editNoteCall(payload);
    if (!res.error) {
      actions.updateTaskDocsWhenNoteEdited(res.note);
    }
  } catch (error) {
    console.warn(error);
  }
};

const updateTaskDocsWhenNoteDeleted = (state, noteId) => {
  state.taskDocs = state.taskDocs.map(task => {
    task.notes = task.notes.filter(note => note._id !== noteId);
    return task;
  });
};

const deleteNote = async (actions, noteId) => {
  try {
    const res = await deleteNoteCall(noteId);

    if (!res.error) {
      actions.updateTaskDocsWhenNoteDeleted(noteId);
    }
  } catch (error) {
    console.warn(error);
  }
};

export {
  updateTaskDocsWhenNoteCreated,
  postNote,
  updateTaskDocsWhenNoteEdited,
  editNote,
  updateTaskDocsWhenNoteDeleted,
  deleteNote
};
