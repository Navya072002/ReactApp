// WishlistIcon.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function WishlistIcon() {
    const [isWishlist, setIsWishlist] = useState(false);

    const toggleWishlist = () => {
        setIsWishlist(!isWishlist);
    };

    return (
        <div>
            <FontAwesomeIcon
                icon={faHeart}
                className={`heart-icon ${isWishlist ? 'active' : ''}`}
                onClick={toggleWishlist}
            />
        </div>
    );
}

export default WishlistIcon;
