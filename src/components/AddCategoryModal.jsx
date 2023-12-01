import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddCategoryModal = ({ isOpen, onRequestClose, onAddCategory }) => {
  const [newCategory, setNewCategory] = useState({
    name: '',
    productCount: 0,
    subcategories: [],
  });

  const handleAddCategory = () => {
    if (newCategory.name.trim() !== '') {
      onAddCategory(newCategory.name);
      setNewCategory({ name: '', productCount: 0, subcategories: [] });
      onRequestClose();
    }
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
            <h3 className="text-3xl font-bold">Add New Category</h3>
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
              placeholder="Enter a new category"
              value={newCategory.name}
              onChange={(e) => setNewCategory((prevCategory) => ({ ...prevCategory, name: e.target.value }))}
              className="border p-2 mb-4"
            />
            <input
              type="number"
              placeholder='Enter product quantity'
              value={newCategory.productCount}
              onChange={(e) => setNewCategory((prevCategory) => ({ ...prevCategory, productCount: e.target.value }))}
              className='border p-2 mb-4'
            />
            <div>
              <h4 className='text-lg font-semibold mb-2'>Subcategories:</h4>
              {newCategory.subcategories.map((subcategory, index) => (
                <div key={index} className='flex items-center mb-2'>
                  <input 
                    type='text'
                    placeholder={'Subcategory ${index + 1}'}
                    value={subcategory}
                    onChange={(e) => setNewCategory((prevCategory) => {
                      const updatedSubCategories = [...prevCategory.subcategories];
                      updatedSubCategories[index] = e.target.value;
                      return { ...prevCategory, subcategories: updatedSubCategories};
                    })}
                    className='border p-2 mr-2'
                  />
                  <button 
                    onClick = {() => setNewCategory((prevCategory) => {
                      const updatedSubCategories = [...prevCategory.subcategories];
                      updatedSubCategories.splice(index, 1);
                      return { ...prevCategory, subcategories: updatedSubCategories};

                    })}
                    className='text-red-600'
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button 
                onClick={() => setNewCategory((prevCategory) => ({ ...prevCategory, subcategories: [...prevCategory.subcategories, ''] }))}
                className='text-indigo-600'
              >
                Add Subcategory
              </button>
            </div>
            <div className="flex items-center justify-end">
              <button
                onClick={handleAddCategory}
                className="bg-indigo-600 text-white px-4 py-2 rounded mr-2"
              >
                Add Category
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

export default AddCategoryModal;
