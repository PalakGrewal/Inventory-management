// // Profile.jsx

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Profile = () => {
//   const location = useLocation();
//   const user = location.state?.user || {};

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="bg-white overflow-hidden shadow rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">User Profile</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <label className="text-sm font-medium text-gray-500">Username</label>
//             <div className="mt-1 text-sm text-gray-900">{user.username}</div>
//           </div>
//           <div>
//             <label className="text-sm font-medium text-gray-500">Full Name</label>
//             <div className="mt-1 text-sm text-gray-900">
//               {user.firstName} {user.lastName}
//             </div>
//           </div>
//           <div>
//             <label className="text-sm font-medium text-gray-500">Email Address</label>
//             <div className="mt-1 text-sm text-gray-900">{user.email}</div>
//           </div>
//           {/* Add more fields as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import H1 from "../Styles/H1";
import EditProfileModal from "../components/EditProfileModal";

const Profile = () => {
  const SaveConfirmationMessage = () => {
    return <div>Click save changes</div>;
  };

  const [originalName, setOriginalName] = useState("John Doe");
  const [editedName, setEditedName] = useState(originalName);
  const [originalEmail, setOriginalEmail] = useState("john.doe@example.com");
  const [editedEmail, setEditedEmail] = useState(originalEmail);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSaveChanges = (newName, newEmail) => {
    setOriginalName(newName);
    setEditedName(newName);
    setOriginalEmail(newEmail);
    setEditedEmail(newEmail);
    setShowSaveMessage(true);

    // Hide the message and button after 2 seconds
    setTimeout(() => {
      setShowSaveMessage(false);
      setShowSaveButton(false);
      setIsEditing(false); // Reset the editing mode
    }, 2000);
  };

  const handleDiscardChanges = () => {
    setShowSaveButton(false);
    setIsEditing(false); // Reset the editing mode
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[88vh] overflow-y-scroll p-10 w-full">
      <header className="">
        <div className="container mx-auto">
          <H1 className="text-3xl" data="User Profile" />
        </div>
      </header>

      <section className="mx-auto my-8 p-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">User Information</h2>

        {isModalOpen && (
          <EditProfileModal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
            onSave={handleSaveChanges}
            initialName={editedName}
            initialEmail={editedEmail}
          />
        )}

        {isEditing ? (
          // Display nothing while editing in modal
          null
        ) : (
          <p className="mb-2">
            Name:{" "}
            <span onClick={handleEdit} className="hover:bg-gray-200 px-2 py-1 cursor-pointer">
              {" "}
              {editedName}
            </span>
            <button onClick={handleEdit} className="mr-2  px-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Edit
            </button>
          </p>
        )}

        <p>
          Email{"      : "}{" "}
          <span
            onClick={handleEdit}
            className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
          >
            {editedEmail}
          </span>

          {showSaveButton && (
            <>
              <button
                onClick={handleSaveChanges}
                className="bg-blue-500 text-white px-2 py-1 mb-2 mr-2"
              >
                Save Changes
              </button>
              <button
                onClick={handleDiscardChanges}
                className="bg-gray-500 text-white px-2 py-1 mb-2"
              >
                Discard Changes
              </button>
            </>
          )}

          {showSaveMessage && (
            <p className="text-green-500 mb-2">
              Changes saved successfully
            </p>
          )}
        </p>

        {showSaveButton && <SaveConfirmationMessage />}
      </section>
      <section className="mx-auto my-8 p-4 bg-white rounded shadow-lg">
            <H1 data="Designation"/>
            <p className="pt-2">Manager</p>
      </section>
    </div>
  );
};

export default Profile;
