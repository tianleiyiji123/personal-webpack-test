/**
 * Created by wanglei on 2016/8/25.
 */

import 'babel-polyfill';
import cats from './cats.js';
import $ from 'jquery';

for (const i of cats) {
  $("#myTest ul").append('<li>' + i + '</li>');
}

//# sourceMappingURL=index-compiled.js.map