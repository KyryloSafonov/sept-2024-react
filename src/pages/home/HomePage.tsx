import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from 'routes/constants';

const HomePage = () => {
    return (
        <div>
            Home page
            <Link to={AppRoutes.users} relative="path">
                <button>Go to users list</button>
            </Link>
        </div>
    );
};

export default HomePage;
