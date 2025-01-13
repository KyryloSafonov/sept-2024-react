import React, { Dispatch, FC, SetStateAction } from 'react';

import { useUserCardsList } from 'components/user-cards-list/useUserCardsList';

interface Props {
    listLength: number;
    setCurrentUser: Dispatch<SetStateAction<any | null>>;
}

export const UserCardsList: FC<Props> = ({ listLength, setCurrentUser }) => {
    const { users, loading } = useUserCardsList({ listLength });

    if (!users && loading) return <div>loading</div>;

    if (!users) return <div>Data not found</div>;

    return (
        <div>
            {users.map((item) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }} key={item.id}>
                    <div>
                        {item.id} --- {item.name}
                    </div>
                    <button onClick={() => setCurrentUser(item)}>Get Current User</button>
                </div>
            ))}
        </div>
    );
};

// маю питання по утілках, дайте пару варіантів як приклади для розуміння що таке ці утілки, я в утілку
// запхав функцію яка приймає аргументом урл а в собі містить фетчовий запит. і потім в api юзаю її
