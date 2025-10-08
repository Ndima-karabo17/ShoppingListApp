import React, { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import addIcon from '../assets/images/add.png';

type GroceryItem = {
  id: number;
  name: string;
  quantity: string;
  notes?: string;
  category?: string;
  image?: string | null; // base64 string or null
};

const Catelog: React.FC = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<Omit<GroceryItem, 'id'>>({
    name: '',
    quantity: '',
    notes: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    fetch('http://localhost:3001/items')
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity) return;

    let base64Image: string | null = null;
    if (imageFile) {
      base64Image = await convertToBase64(imageFile);
    }

    const newItem = {
      ...formData,
      image: base64Image,
    };

    const response = await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });

    const data = await response.json();
    setItems(prev => [...prev, data]);

    // Reset form
    setFormData({ name: '', quantity: '', notes: '', category: '', image: null });
    setImageFile(null);
    setShowForm(false);
  };

  return (
    <div className="bg-amber-50 px-4 py-8 rounded-md max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-mono">Grocery List</h2>
        <p className="text-base sm:text-lg text-zinc-500 font-serif">Manage your weekly needs</p>
      </div>

      {/* Search Bar */}
      <div className="mt-6">
        <input
          type="text"
          className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Search items..."
        />

        {/* Items */}
        <div className="mt-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 mb-3 rounded shadow-sm">
              <h3 className="font-bold text-lg">{item.name} ({item.quantity})</h3>
              {item.notes && <p className="text-sm italic text-zinc-600">{item.notes}</p>}
              {item.category && <p className="text-sm text-zinc-600">Category: {item.category}</p>}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 mt-2 rounded border"
                />
              )}
            </div>
          ))}
        </div>

        {/* Add Button */}
        <div className="flex justify-end mt-5">
          <img
            src={addIcon}
            alt="Add"
            className="w-10 cursor-pointer hover:scale-105 transition"
            onClick={() => setShowForm(true)}
          />
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white p-5 rounded-md w-[90%] sm:w-[400px] relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Add New Item</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Item Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Item Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium">Quantity:</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium">Optional Notes:</label>
                <input
                  type="text"
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium">Category:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium">Item Image:</label>
                <input
                  type="file"
                  id="image"
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
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-green-600 text-white py-2 mt-2 rounded hover:bg-green-700 transition"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catelog;
