import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Sup?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://64.media.tumblr.com/1b43f6b85cd46c40bf4febb26bfb22dd/58db536044d75d97-dc/s540x810/5900d7f154eea0a97c2966fd179ea4f3d5ad833e.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
