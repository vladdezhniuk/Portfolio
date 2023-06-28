import React from 'react';
import { Spinner } from '@static/images/common';

import './index.scss';

export const Loader: React.FC<{
    spinnerSize: string;
    containerHeight?: string;
}> = ({ spinnerSize, containerHeight = 'unset' }) =>
        <div className="loader" style={{ height: containerHeight }}>
            <div className="loader__spinner" style={{ height: spinnerSize, width: spinnerSize }}>
                <Spinner />
            </div>
        </div>;

