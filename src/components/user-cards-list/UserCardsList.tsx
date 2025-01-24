import React, { FC, memo,useMemo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import classNames from 'classnames';

import { useUserCardsList } from 'components/user-cards-list/useUserCardsList';
import { AppRoutes } from 'routes/constants';

import './styles.scss';

interface Props {
    listLength: number;
    id: number | null;
}

export const UserCardsList: FC<Props> = memo(({ listLength, id }) => {
    const { users, loading } = useUserCardsList({ listLength });

    const getUser = (userId: number | null) => {
        if (!id || !users || !users.length) return;

        return users.find((user) => user.id === userId);
    };

    const currentUser = useMemo(() => getUser(id), [id]);

    if (!users && loading) return <div>loading</div>;

    if (!users) return <div>Data not found</div>;

    console.log(currentUser);

    return (
        <div>
            {users.map((item) => {
                return (
                    <div
                        className={classNames('user-card-item', { 'current-user': item.id === 6 })}
                        key={item.id}
                    >
                        <div className="title">
                            {item.id} --- {item.name}
                            <div className="email">{item.email}</div>
                        </div>
                        <Link
                            to={generatePath(AppRoutes.user, { userId: item.id })}
                            relative="route"
                        >
                            <button>Get Current User</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
});
