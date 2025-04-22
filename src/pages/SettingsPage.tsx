
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/store';
import { increment } from '@store/counterSlice';
import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { useWindowSize } from '@hooks/useWindowSize';
import { useLocalStorage } from '@hooks/useLocalStorage';

export const SettingsPage: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();
  const [savedValue, setSavedValue] = useLocalStorage('settings-data', '');

  return (
    <div>
      <Header title="Settings Page" />
      <main>
        <h1>Settings Page</h1>
        <Card title="Counter Example">
          <p>Current count: {count}</p>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
        </Card>
        <Card title="Window Size">
          <p>Width: {width}px, Height: {height}px</p>
        </Card>
        <Card title="Local Storage">
          <input
            type="text"
            value={savedValue}
            onChange={(e) => setSavedValue(e.target.value)}
            placeholder="Type to save to localStorage"
          />
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
