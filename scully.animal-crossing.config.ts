import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "animal-crossing",
  outDir: './dist/static',
  routes: {
    '/villagers/:id': {
      type: 'json',
      id: {
        url: `https://acnhapi.com/v1/villagers`,
        property: 'id',
        resultsHandler: (res) => {
          return Object.values(res);
        }
      }
    },
    '/fish/:id': {
      type: 'json',
      id: {
        url: `https://acnhapi.com/v1/fish`,
        property: 'id',
        resultsHandler: (res) => {
          return Object.values(res);
        }
      }
    },
    '/insects/:id': {
      type: 'json',
      id: {
        url: `https://acnhapi.com/v1/bugs`,
        property: 'id',
        resultsHandler: (res) => {
          return Object.values(res);
        }
      }
    }
  }
};