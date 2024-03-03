import React from 'react';
import './CardComponent.css';

export default function CardComponent({ name, email, onEdit, onDelete }) {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <div className="card-details">
                <p>{email}</p>
            </div>
            <div className="card-buttons">
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}
