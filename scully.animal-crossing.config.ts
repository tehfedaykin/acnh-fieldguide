import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "animal-crossing",
  outDir: './dist/static',
  routes: {
    '/villagers/:id': {
      type: 'json',
      id: {
        url: 'http://acnhapi.com/villagers',
        property: 'id',
        resultsHandler: (res) => {
          return Object.values(res);
        }
      }
    },
    '/fish/:id': {
      type: 'json',
      id: {
        url: 'http://acnhapi.com/fish',
        property: 'id',
        resultsHandler: (res) => {
          return Object.values(res);
        }
      }
    },
    '/insects/:id': {
      type: 'json',
      id: {
        url: 'http://acnhapi.com/bugs',
        property: 'id',
        resultsHandler: (res) => {
          return Object.values(res)
        }
      }
    }
  }
};
