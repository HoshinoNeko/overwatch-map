import React from 'react';
import './MapViewer.css';

const MapViewer = ({ imageUrl, markers }) => {
    return (
        <div className="map-viewer">
            <img src={imageUrl} alt="Map" className="map-image" />
            {markers && markers.map((marker, index) => (
                <div
                    key={index} 
                    className={`marker ${marker.type}`} 
                    style={{ position: 'absolute', top: `${marker.y}px`, left: `${marker.x}px` }}
                >
                    {marker.content}
                </div>
            ))}
        </div>
    );
};

export default MapViewer;