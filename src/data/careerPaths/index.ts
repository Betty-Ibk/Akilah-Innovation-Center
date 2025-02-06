import { engineeringPaths } from './engineeringPaths';
import { businessPaths } from './businessPaths';
import { CareerPath } from './types';

export const careerPaths: CareerPath[] = [
  ...engineeringPaths,
  ...businessPaths
];

export type { CareerPath };