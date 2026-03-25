import React from 'react';
import './ScreenshotModal.css'; // assuming you want to include some styles

interface ScreenshotModalProps {
    isOpen: boolean;
    screenshotUrl: string;
    description: string;
    onClose: () => void;
}

const ScreenshotModal: React.FC<ScreenshotModalProps> = ({ isOpen, screenshotUrl, description, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <img src={screenshotUrl} alt={description} className="screenshot" />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ScreenshotModal;