import { useEffect, useState } from 'react';

interface Input {
    listLength: number;
}

interface Output {
    users: any[] | null;
    loading: boolean;
}

export const useUserCardsList = ({ listLength }: Input) => {
    const [users, setUsers] = useState<any[] | null>(null);
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setUsers([{id: '111', name:"ewfwf"}, ...json]))
            .finally(() => setLoading(false))
            .catch((e) => console.error(e));

        return () => {
            setUsers(null);
            setLoading(false);
        };
    }, []);

    return { users, loading };
};
