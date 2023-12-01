// Profile.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const user = location.state?.user || {};

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white overflow-hidden shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-500">Username</label>
            <div className="mt-1 text-sm text-gray-900">{user.username}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Full Name</label>
            <div className="mt-1 text-sm text-gray-900">
              {user.firstName} {user.lastName}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Email Address</label>
            <div className="mt-1 text-sm text-gray-900">{user.email}</div>
          </div>
          {/* Add more fields as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
