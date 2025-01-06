import { FC, PropsWithChildren } from 'react';

import 'App.css';

interface Props extends PropsWithChildren {
    className?: string;
}

const TextWrapper: FC<Props> = (props) => {
    const { className, children } = props;

    return <div>{children}</div>;
};

const App: FC = () => {
    let num = 1;
    const count = () => num + 1;

    return (
        <div>
            <TextWrapper>
                <div>123</div>
            </TextWrapper>
        </div>
    );
};

export default App;
