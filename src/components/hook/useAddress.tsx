import { useState } from 'react';

function useAddress() {
    const [address, setAddress] = useState<string>('');

    const saveAddress = (address: string) => {
        setAddress(address);
        localStorage.setItem('address', address);
    };

    return { address, saveAddress };
}

export default useAddress;
