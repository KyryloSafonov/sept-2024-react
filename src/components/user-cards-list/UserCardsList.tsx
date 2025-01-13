import React, { Dispatch, FC, SetStateAction } from 'react';

import { useUserCardsList } from 'components/user-cards-list/useUserCardsList';
import { generatePath, Link } from 'react-router-dom';
import { AppRoutes } from 'routes/constants';

interface Props {
    listLength: number;
}

export const UserCardsList: FC<Props> = ({ listLength }) => {
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
                    <Link to={generatePath(AppRoutes.user, { userId: item.id })} relative="route">
                        <button>Get Current User</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

// маю питання по утілках, дайте пару варіантів як приклади для розуміння що таке ці утілки, я в утілку
// запхав функцію яка приймає аргументом урл а в собі містить фетчовий запит. і потім в api юзаю її
