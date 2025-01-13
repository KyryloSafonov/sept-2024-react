import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserPage = () => {
    const { userId } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [isNotFoundUser, setIsNotFoundUser] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) return;

        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                if (res.status === 404) {
                    setIsNotFoundUser(true);
                    setLoading(false);
                }

                return res.json();
            })
            .then((json) => setCurrentUser(json))
            .finally(() => setLoading(false))
            .catch((e) => console.error(e));

        return () => {
            setCurrentUser(null);
            setLoading(false);
        };
    }, []);

    if (!currentUser) return null;

    if (loading && !currentUser) return <div>...loading</div>;

    if (isNotFoundUser)
        return (
            <div>
                <div>User not found</div>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        );

    return (
        <div>
            <h3>
                {currentUser.id} --- {currentUser.name}
            </h3>
            <div>{currentUser.email}</div>
            <div>{JSON.stringify(currentUser.address)}</div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserPage;
