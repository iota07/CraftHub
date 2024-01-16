import React from 'react';

export default function Avatar({size}) {
    const getSizeClasses = (size) => {
        switch (size) {
            case 'small':
                return 'h-12 w-12';
            case 'medium':
                return 'h-40 w-40';
            default:
                return ''; // Default size or any other class you want
        }
    };

    const sizeClasses = getSizeClasses(size);

    return (
        <div className={`flex -space-x-2 overflow-hidden ${sizeClasses}`}>
            <img className="inline-block rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div>
    );
}