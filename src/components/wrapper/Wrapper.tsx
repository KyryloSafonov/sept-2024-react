import React, { FC } from 'react';
import { addCount } from 'components/wrapper/utils';

export const Wrapper: FC = () => {
    addCount(3);
    return <div></div>;
};
