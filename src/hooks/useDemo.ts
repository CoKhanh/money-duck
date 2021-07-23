import { useState } from 'react';

export const useDemo = () => {
    const [demo, setDemo] = useState('abc');

    return demo;
}