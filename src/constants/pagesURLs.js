import * as pages from './pages';
import config from 'config';

const result = {
  [pages.defaultPage]: `${config.UI_URL_PREFIX}/${pages.defaultPage}`,
  [pages.login]: `${config.UI_URL_PREFIX}/${pages.login}`,
  [pages.secretPage]: `${config.UI_URL_PREFIX}/${pages.secretPage}`,
  [pages.productListView]: `${config.UI_URL_PREFIX}/${pages.productListView}`,
  [pages.productEditor]: `${config.UI_URL_PREFIX}/${pages.productEditor}`,
};

export default result;
