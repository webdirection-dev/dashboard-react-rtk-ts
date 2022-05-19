import React from "react";

interface ICard {
    children: React.ReactNode;
    isFeatured?: boolean;
    className?: string;
}

const Card: React.FC<ICard> = ({children, isFeatured, className}) => {
    return (
        <div
            className={
                `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
            }
        >
            {children}
        </div>
    )
}

export {Card};