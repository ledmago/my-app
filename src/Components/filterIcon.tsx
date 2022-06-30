import React from 'react';

interface FilterIconProps {
    size: number;
    fill: string;
    onClick?: () => void;
}

export default function filterIcon({ size, fill, onClick }: FilterIconProps) {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer', display: 'inline-block' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 50 50"
            >
                <path
                    fill={fill}
                    d="M3 4.1c0 1.2 3.3 5.7 8 10.7l8 8.7v18l5.4 3.3c3 1.7 5.7 3.2 6 3.2.3 0 .6-5.5.6-12.3V23.5l8-8.7c4.7-5 8-9.5 8-10.7C47 2 46.6 2 25 2S3 2 3 4.1z" />
            </svg>
        </div>
    )
}


