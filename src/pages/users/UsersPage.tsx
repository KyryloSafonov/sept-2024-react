import React, { useState } from 'react';

import { UserCardsList } from 'components/user-cards-list/UserCardsList';

const UsersPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [listLength, setListLength] = useState<number>(10);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            Home
            <input
                type="number"
                value={listLength}
                onChange={(event) => setListLength(Number(event.target.value))}
            />
            <div style={{ height: '400px' }}>
                {isOpen && (
                    <UserCardsList listLength={listLength} />
                )}
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
        </div>
    );
};

export default UsersPage;
