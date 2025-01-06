import { FC, PropsWithChildren } from 'react';

import 'App.css';

// 1.Подключала стили Tailwind на второй ветке lessons,зашарила проєкт когда практически доделала домашку стоя на ветки homeworks она третья и первая master.
// Попыталась подключить стили на ветку homeworks,они не подключились.Что мне необходимо сделать чтобы их подключить и как на гитхаб добавить вторую ветку lessons.
// 2.
// На какой версии интелидж работает  TS Jsons2ts у меня он установлен,но почему вместо того чтобы сгенирировать разметку выдает какие то ссылки.

// 1. Чи є принципова різниця використовувати саме стрілочні функції для компонентів, а не function declarations
//
// 2. Чи є обовʼязковим класти кожен компонент в окрему папку в межах директорії components, якщо там тільки один
// файлик без ще одного файлу css (наприклад, коли юзаємо tailwind)
//
// 3. Яка різниця між export default та іменованим експортом. Не зрозуміло коли що краще використовувати

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
