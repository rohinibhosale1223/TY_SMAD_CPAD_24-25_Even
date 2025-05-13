import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Photo } from '../types';
import './Gallery.css';

const initialPhotos: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains',
    uploadedBy: 'user1',
    uploadDate: new Date(),
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'City Lights',
    description: 'Night view of the city',
    uploadedBy: 'user2',
    uploadDate: new Date(),
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Forest Path',
    description: 'A peaceful walk in the woods',
    uploadedBy: 'user3',
    uploadDate: new Date(),
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    title: 'Desert Dunes',
    description: 'Golden sands under a blue sky',
    uploadedBy: 'user4',
    uploadDate: new Date(),
  },
];

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState<{ title: string; description: string; file: File | null; preview: string | null }>({ title: '', description: '', file: null, preview: null });

  useEffect(() => {
    setPhotos(initialPhotos);
    setLoading(false);
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setNewPhoto({ title: '', description: '', file: null, preview: null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPhoto((prev) => ({ ...prev, file, preview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title || !newPhoto.file || !newPhoto.preview) return;
    const newId = (photos.length + 1).toString();
    const photo: Photo = {
      id: newId,
      url: newPhoto.preview,
      title: newPhoto.title,
      description: newPhoto.description,
      uploadedBy: 'You',
      uploadDate: new Date(),
    };
    setPhotos([photo, ...photos]);
    handleCloseModal();
  };

  return (
    <>
      <Header />
      <div className="welcome-section">
        <h1>Welcome to OneShot</h1>
        <p>Explore the world through the lens. Discover stunning photography, learn new techniques, and be part of our vibrant community.</p>
        <p>Start your photographic journey today!</p>
      </div>
      <div className="gallery-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2>Photo Gallery</h2>
          <button className="upload-button" style={{ width: 'auto', padding: '0.5rem 1.5rem' }} onClick={handleOpenModal}>Add Photo</button>
        </div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.url} alt={photo.title} />
                <div className="photo-info">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                  <div className="photo-meta">
                    <span>By: {photo.uploadedBy}</span>
                    <span>{photo.uploadDate.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add a New Photo</h2>
            <form onSubmit={handleAddPhoto} className="upload-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={newPhoto.description}
                  onChange={(e) => setNewPhoto((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label htmlFor="photo">Photo</label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
              {newPhoto.preview && (
                <div className="preview-container">
                  <img src={newPhoto.preview} alt="Preview" className="preview-image" />
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 16 }}>
                <button type="button" className="upload-button" style={{ background: '#888' }} onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="upload-button" disabled={!newPhoto.title || !newPhoto.file}>Add Photo</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery; 