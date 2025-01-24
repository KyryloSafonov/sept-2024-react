import React, { useLayoutEffect, useState } from 'react';

import { UserCardsList } from 'components/user-cards-list/UserCardsList';

//Чому компонент usersComponent ше раз ререндереться якщо в депсах
// ми нічого не відслідковуємо?(питання до lesson 7.1 (відео на відрізку 3хв.00 сек — 3хв.15сек.)

const UsersPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [listLength, setListLength] = useState<number>(10);

    const [userId, setUserId] = useState<number | null>(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            Home
            <input
                type="number"
                value={userId || 0}
                onChange={(event) => setUserId(Number(event.target.value))}
            />
            <div style={{ height: '400px' }}>
                {isOpen && <UserCardsList listLength={listLength} id={userId} />}
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
        </div>
    );
};

export default UsersPage;
