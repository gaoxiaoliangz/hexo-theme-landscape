const kit = require('./kit')
const mobilemenu = require('./mobile-menu')
const contentplus = require('./content-plus')

hljs.initHighlightingOnLoad()

kit.excAndExcOnResizing(function () {
  contentplus.layoutContent(".content-plus");
  mobilemenu.init();
});
