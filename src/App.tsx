import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Main, NotFound } from 'pages';
import { PATHS } from './constants';

const App: FC = () => {
  const { main, any } = PATHS;

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={any} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
