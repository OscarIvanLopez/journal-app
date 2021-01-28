import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm(note);

  const { title, body, url } = values;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [values, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Sup?"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {url && (
          <div className="notes__image">
            <img
              src="https://64.media.tumblr.com/1b43f6b85cd46c40bf4febb26bfb22dd/58db536044d75d97-dc/s540x810/5900d7f154eea0a97c2966fd179ea4f3d5ad833e.jpg"
              alt="imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
