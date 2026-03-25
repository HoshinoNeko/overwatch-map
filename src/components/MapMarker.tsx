import React from 'react';
import PropTypes from 'prop-types';
import './MapMarker.css';

const MapMarker = ({ position, flashpoint, onClick, hoverMessage }) => {
    const handleMouseEnter = () => {
        // Show tooltip logic here
    };

    const handleMouseLeave = () => {
        // Hide tooltip logic here
    };

    return (
        <div
            className={`map-marker ${flashpoint ? 'flashpoint' : ''}`}
            style={{ position: 'absolute', top: position.y, left: position.x }}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {flashpoint && <span className='badge'>Flashpoint</span>}
            <span className='tooltip'>{hoverMessage}</span>
        </div>
    );
};

MapMarker.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    flashpoint: PropTypes.bool,
    onClick: PropTypes.func,
    hoverMessage: PropTypes.string,
};

MapMarker.defaultProps = {
    flashpoint: false,
    onClick: () => {},
    hoverMessage: '',
};

export default MapMarker;
