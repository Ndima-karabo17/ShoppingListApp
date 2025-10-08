import React, { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import addIcon from '../assets/images/add.png';

type GroceryItem = {
  id: number;
  name: string;
  quantity: string;
  notes?: string;
  category?: string;
  image?: string | null;
};

const Catelog: React.FC = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<Omit<GroceryItem, 'id'>>({
    name: '',
    quantity: '',
    notes: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    fetch('http://localhost:5000/items') // Changed to port 5000 (match your submit URL)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setImageFile(files[0]);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') resolve(reader.result);
        else reject('Could not convert image to base64.');
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetForm = () => {
    setFormData({ name: '', quantity: '', notes: '', category: '', image: null });
    setImageFile(null);
    setEditingItemId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity) return;

    let base64Image = formData.image;

    if (imageFile) {
      base64Image = await convertToBase64(imageFile);
    }

    const itemData = {
      ...formData,
      image: base64Image,
    };

    if (editingItemId !== null) {
      // Edit Mode
      const response = await fetch(`http://localhost:5000/items/${editingItemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
      });

      const updatedItem = await response.json();
      setItems(prev =>
        prev.map(item => (item.id === editingItemId ? updatedItem : item))
      );
    } else {
      // Add New
      const response = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
      });

      const newItem = await response.json();
      setItems(prev => [...prev, newItem]);
    }

    resetForm();
  };

  const handleEdit = (item: GroceryItem) => {
    setEditingItemId(item.id);
    setFormData({
      name: item.name,
      quantity: item.quantity,
      notes: item.notes || '',
      category: item.category || '',
      image: item.image || null,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this item?');
    if (!confirm) return;

    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE',
    });

    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-amber-50 px-4 py-8 rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-mono">Grocery List</h2>
      <p className="text-base sm:text-lg text-zinc-500 font-serif">Manage your weekly needs</p>

      <div className="mt-6">
        <input
          type="text"
          className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Search items..."
        />

        <div className="mt-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 mb-3 rounded shadow-sm relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{item.name} ({item.quantity})</h3>
                  {item.notes && <p className="text-sm italic text-zinc-600">{item.notes}</p>}
                  {item.category && (
                    <p className="text-sm text-zinc-600">Category: {item.category}</p>
                  )}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 mt-2 rounded border"
                    />
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-5">
          <img
            src={addIcon}
            alt="Add"
            className="w-10 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setShowForm(true);
              setEditingItemId(null); // Reset edit mode
              setFormData({ name: '', quantity: '', notes: '', category: '', image: null });
              setImageFile(null);
            }}
          />
        </div>
      </div>

      {showForm && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50"
          onClick={resetForm}
        >
          <div
            className="bg-white p-5 rounded-md w-[90%] sm:w-[400px] relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={resetForm}
              className="absolute top-2 right-3 text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">
              {editingItemId ? 'Edit Item' : 'Add New Item'}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label>Item Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />

              <label>Quantity:</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />

              <label>Optional Notes:</label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />

              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />

              <label>Item Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {imageFile && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  className="w-20 mt-2 rounded"
                />
              )}

              <button
                type="submit"
                className="bg-green-600 text-white py-2 mt-2 rounded hover:bg-green-700 transition"
              >
                {editingItemId ? 'Update Item' : 'Add Item'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catelog;
