import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { cancelNote, startSaveNote, startUploading } from "../../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const noteDate = moment(active.date);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handleCancel = () => {
    dispatch(cancelNote());
  };
  return (
    <div className="notes__appbar">
      <span>{noteDate.format('Do')} of {noteDate.format('MMMM')} year {noteDate.format('YYYY')}</span>
      <input
        type="file"
        name="file"
        style={{ display: "none" }}
        id="fileSelector"
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
