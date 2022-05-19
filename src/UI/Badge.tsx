import React, {MouseEventHandler} from "react"
import {ReactComponent as Remove} from '../assets/images/icon-remove.svg'

interface IBadge {
    variant?: string | string[];
    colorScheme?: string | string[];
    children: React.ReactNode;
    onClear?: MouseEventHandler<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Badge: React.FC<IBadge> = ({
                   variant = 'basic',
                   colorScheme = 'light',
                   children,
                   onClear,
                   onClick,
               }) => (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>

    <span>
      {children}
    </span>

    {variant === 'clearable' && (
        <div className='badge-remover' onClick={onClear}>
            <Remove />
        </div>
    )}
    </div>
);