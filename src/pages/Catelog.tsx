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
  const [imageFile, setImageFile] = useState<File | null>(null); // store raw File
  const [formData, setFormData] = useState<Omit<GroceryItem, 'id'>>({
    name: '',
    quantity: '',
    notes: '',
    category: '',
    image: null, // base64 string
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
    <div className='bg-amber-50 p-6 rounded-md max-w-xl mx-auto mt-12'>
      <div>
        <h2 className='text-3xl font-mono'>Grocery List</h2>
        <p className='text-xl text-zinc-400 font-serif'>Manage your weekly needs</p>
      </div>

      <div className='mt-6'>
        <input
          type='text'
          className='border rounded-sm w-full p-2'
          placeholder='Search items...'
        />

        <div className='mt-4'>
          {items.map((item) => (
            <div key={item.id} className='bg-white p-3 mb-3 rounded shadow'>
              <h3 className='font-bold'>{item.name} ({item.quantity})</h3>
              {item.notes && <p className='text-sm italic'>{item.notes}</p>}
              {item.category && <p className='text-sm'>Category: {item.category}</p>}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-20 mt-2 rounded'
                />
              )}
            </div>
          ))}
        </div>

        <div className='flex justify-end mt-5'>
          <img
            src={addIcon}
            alt='Add'
            className='w-10 cursor-pointer'
            onClick={() => setShowForm(true)}
          />
        </div>
      </div>

      {showForm && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50'>
          <div className='bg-white p-5 rounded-md w-[400px] relative'>
            <button
              onClick={() => setShowForm(false)}
              className='absolute top-2 right-3 text-red-500 text-xl'
            >
              &times;
            </button>
            <h3 className='text-xl font-semibold mb-4'>Add New Item</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
              <label>Item Name:</label>
              <input
                type='text'
                name='name'
                placeholder='Item Name'
                value={formData.name}
                onChange={handleChange}
                className='border p-2 rounded'
                required
              />
              <label>Quantity:</label>
              <input
                type='text'
                name='quantity'
                placeholder='Quantity'
                value={formData.quantity}
                onChange={handleChange}
                className='border p-2 rounded'
                required
              />
              <label>Optional Notes:</label>
              <input
                type='text'
                name='notes'
                placeholder='Optional notes'
                value={formData.notes}
                onChange={handleChange}
                className='border p-2 rounded'
              />
              <label>Category:</label>
              <input
                type='text'
                name='category'
                placeholder='Category'
                value={formData.category}
                onChange={handleChange}
                className='border p-2 rounded'
              />
              <label>Item Image:</label>
              <input
                type='file'
                name='image'
                accept='image/*'
                onChange={handleChange}
                className='border p-2 rounded'
              />
              {imageFile && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt='Preview'
                  className='w-20 mt-2 rounded'
                />
              )}
              <button
                type='submit'
                className='bg-green-600 text-white py-2 rounded hover:bg-green-700'
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
