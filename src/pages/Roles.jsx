import React, { useState, useEffect } from 'react';
import AddUserProfileModal from '../components/AddUserProfileModal';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const Roles = () => {
  const [profile, setProfile] = useState([
    { id: 1, name: 'Varsha', email: 'varsha@example.com', phoneNo: '42342432432', role: 'manager' },
    // Add more initial user profiles as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading data from the server
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddUserProfile = (newUserProfile) => {
    setProfile([...profile, newUserProfile]);
    setIsModalOpen(false);
  };

  const handleDeleteUserProfile = (userId) => {
    // Simulate deleting a user profile
    const updatedProfile = profile.filter((p) => p.id !== userId);
    setProfile(updatedProfile);
  };

  const handleEditUserProfile = (userId, newName) => {
    // Simulate editing a user profile
    const updatedProfile = profile.map((p) =>
      p.id === userId ? { ...p, name: newName } : p
    );

    setProfile(updatedProfile);
  };

  const openAddUserProfileModal = () => {
    setIsModalOpen(true);
  };

  const closeAddUserProfileModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">User Profiles</h1>

      <button
        onClick={openAddUserProfileModal}
        className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
      >
        Add New User Profile
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.map((p) => (
          <div key={p.id} className="border p-4 rounded mb-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold" contentEditable>{p.name}</span>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    handleEditUserProfile(p.id, prompt('Enter new name:', p.name))
                  }
                  className="text-blue-600 mr-2"
                >
              
                </button>
                <button
                  onClick={() => handleDeleteUserProfile(p.id)}
                  className="text-red-600"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <span className="text-gray-500 lg:mb-0 mb-2 " >Email: <span contentEditable>{p.email}</span></span>
              <span className="text-gray-500 lg:mb-0 mb-2">Phone No: <span contentEditable>{p.phoneNo}</span></span>
              <span className="text-gray-500 lg:mb-0 mb-2">Role: <span contentEditable>{p.role}</span></span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New User Profile Modal */}
      <AddUserProfileModal
        isOpen={isModalOpen}
        onRequestClose={closeAddUserProfileModal}
        onAddUserProfile={handleAddUserProfile}
      />
    </div>
  );
};

export default Roles;
