import React from 'react';
import { createRoot } from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<App />);
  root.unmount(); // 清理测试环境
});
describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
    });