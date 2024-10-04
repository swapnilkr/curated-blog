import React, { useState, useEffect } from 'react';
import '../styles/PostCard.css';
import { categoryColorMapping } from '../helpers/const';
import { Link } from 'react-router-dom';
import ImageShimmer from './ImageShimmer';
import Logo from '../assets/truecaller.svg'

const PostCard = ({ post, selectedCategoryName = '' }) => {

    let allCategoryPostBelong = Object.keys(post?.categories);
    let categoryName = (allCategoryPostBelong.includes(selectedCategoryName) ? selectedCategoryName : allCategoryPostBelong[0]) || '';

    const [isImageLoaded, setImageLoaded] = useState(false);
    const [isImageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    useEffect(() => {
        if (!post?.post_thumbnail?.URL) {
            setImageError(true);
        }
    }, [post?.post_thumbnail?.URL]);

    return (
        <div className="post-card shadow">
            <Link to={`/post/${post.slug}`}>
                <div className='post-card-header'>

                    <span className='post-card-category-color' style={{ backgroundColor: `${categoryColorMapping[categoryName || 'default']}` }}>
                    </span>
                    <span className='post-categories'>
                        {post?.categories[categoryName]?.name}
                    </span>
                </div>
                <div className="post-thumbnail">
                    {!isImageLoaded && !isImageError && <ImageShimmer />}
                    {post?.post_thumbnail?.URL && !isImageError && (
                        <img
                            src={post.post_thumbnail.URL}
                            alt={post?.title}
                            style={{ display: isImageLoaded ? 'block' : 'none' }}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    )}
                    {isImageError &&
                        <img
                            style={{objectFit:'contain'}}
                            src={Logo}
                            alt={post?.title}
                        />
                    }
                </div>
                <div className="post-card-content">
                    {/* to handle unicode */}
                    <h4 className="post-card-title" dangerouslySetInnerHTML={{ __html: post.title }}></h4>
                    <p className="post-card-date">{formatDate(post?.date)}</p>
                </div>
            </Link>
        </div>
    );
};


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (const interval in intervals) {
        const value = Math.floor(diffInSeconds / intervals[interval]);
        if (value >= 1) {
            return `${value} ${interval}${value > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
};

export default PostCard;
