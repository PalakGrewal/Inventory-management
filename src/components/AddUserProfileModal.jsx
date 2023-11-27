import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal

const AddUserProfileModal = ({ isOpen, onRequestClose, onAddUserProfile }) => {
  const [newUserProfile, setNewUserProfile] = useState({
    id: '',
    name: '',
    email: '',
    phoneNo: '',
    role: '',
  });

  const handleAddUserProfile = () => {
    if (isValidUserProfile(newUserProfile)) {
      onAddUserProfile(newUserProfile);
      setNewUserProfile({
        id: '',
        name: '',
        email: '',
        phoneNo: '',
        role: '',
      });
      onRequestClose(); // Close the modal after adding a user profile
    }
  };

  const isValidUserProfile = (userProfile) => {
    // Implement your validation logic here
    return (
      userProfile.name.trim() !== '' &&
      userProfile.email.trim() !== '' &&
      userProfile.phoneNo.trim() !== '' &&
      userProfile.role.trim() !== ''
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      overlayClassName="fixed inset-0 z-40 backdrop-filter"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-bold">Add New User Profile</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onRequestClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <input
              type="text"
              placeholder="Enter ID"
              value={newUserProfile.id}
              onChange={(e) => setNewUserProfile({ ...newUserProfile, id: e.target.value })}
              className="border p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Enter Name"
              value={newUserProfile.name}
              onChange={(e) => setNewUserProfile({ ...newUserProfile, name: e.target.value })}
              className="border p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Enter Email"
              value={newUserProfile.email}
              onChange={(e) => setNewUserProfile({ ...newUserProfile, email: e.target.value })}
              className="border p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Enter Phone No"
              value={newUserProfile.phoneNo}
              onChange={(e) => setNewUserProfile({ ...newUserProfile, phoneNo: e.target.value })}
              className="border p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Enter Role"
              value={newUserProfile.role}
              onChange={(e) => setNewUserProfile({ ...newUserProfile, role: e.target.value })}
              className="border p-2 mb-4"
            />
            <div className="flex items-center justify-end">
              <button
                onClick={handleAddUserProfile}
                className="bg-indigo-600 text-white px-4 py-2 rounded mr-2"
              >
                Add User Profile
              </button>
              <button
                onClick={onRequestClose}
                className="text-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddUserProfileModal;
