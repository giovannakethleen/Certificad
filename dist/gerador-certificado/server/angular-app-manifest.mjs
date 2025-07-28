
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/certificados/novo"
  },
  {
    "renderMode": 0,
    "route": "/certificados/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5911, hash: '94845b0e7692e760fb17fd83dd27c8189473b0e4c4bf8875d851a534a5721cd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5459, hash: 'ea2d8486eeb811e4c80e4ad6f447ca9a65096e969cb5e3ba6e4d6aa893cedf81', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9883, hash: '4f94001e7e2d1d4270b19caa1c8b254e3ef316574e7bcb3f7f1f89003ac924a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZHSQGL7D.css': {size: 120931, hash: 'UBPWNCkpw6w', text: () => import('./assets-chunks/styles-ZHSQGL7D_css.mjs').then(m => m.default)}
  },
};
