// useModal.tsx
import { useState, useCallback } from 'react';

function useModal() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return { isModalOpen, handleOpenModal, handleCloseModal };
}

export default useModal;