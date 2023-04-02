import { ArrowRight } from '@/app/static/images/projects';
import React from 'react';

export const SliderArrow: React.FC<any> = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <ArrowRight />
        </div>
    )
}
