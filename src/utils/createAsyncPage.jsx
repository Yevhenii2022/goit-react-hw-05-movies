import { lazy } from 'react';

export default function createAsyncPage(componentName) {
  return lazy(() => import(`views/${componentName}`));
}
