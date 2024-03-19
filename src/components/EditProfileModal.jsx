import React, { useState } from "react";
import Modal from "react-modal";
import H1 from "../Styles/H1";
const EditProfileModal = ({ isOpen, onRequestClose, onSave }) => {
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const handleSave = () => {
    onSave(editedName, editedEmail);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Modal"
    >
      <div>
      <H1 data="Edit the Profile"></H1>
      <div className=" flex flex-wrap w-96">
        <div>
          <label htmlFor="editedName">Name:</label>
          <input className="px-2 bg-gray-200 m-2 rounded "
            type="text"
            id="editedName"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="editedEmail">Email:{" "}</label>
          <input
            className="bg-gray-200 m-2 rounded "
            type="text"
            id="editedEmail"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded m-4" onClick={handleSave}>Save</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded m-4" onClick={onRequestClose}>Discard</button>
</div>    </Modal>
  );
};

export default EditProfileModal;
