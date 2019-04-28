import { start } from '@storybook/core/client';

import './globals';
import render from './render';

const { load, clientApi, configApi, forceReRender } = start(render);

export const {
  storiesOf,
  setAddon,
  addDecorator,
  addParameters,
  clearDecorators,
  getStorybook,
  raw,
} = clientApi;

export const { configure } = configApi;
export { load, forceReRender };
