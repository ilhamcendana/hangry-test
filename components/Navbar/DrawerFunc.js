import { useState } from "react";

export const useDisclosure = () => {
    const [isOpen, isOpenSet] = useState(false);

    const onOpen = () => isOpenSet(true);
    const onClose = () => isOpenSet(false);

    return { onOpen, onClose, isOpen };
}