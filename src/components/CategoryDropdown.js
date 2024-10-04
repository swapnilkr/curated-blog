import React from 'react';
import '../styles/CategoryDropdown.css';

const CategoryDropdown = ({ categories, setPage, setSelectedCategory, innerRef, setSelectedCategoryName }) => {

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setPage(1);
        setSelectedCategoryName(categories.filter((item) => item?.slug === event?.target?.value )[0]?.name || '');
    };

    return (
        <div ref={innerRef} className="category-dropdown">
            <select onChange={handleCategoryChange} className="styled-select">
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category.ID} value={category.slug}>{category.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
