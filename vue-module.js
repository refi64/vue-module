window.VueModule = function(Vue, options) {
  Vue.moduleRooted = function (root, name, opts) {
    opts = opts || {};
    var tmpl = root.querySelector('vue-module#' + name + ' template') ||
               root.querySelector('div[vue-module="' + name + '"] template');
    if (!tmpl)
      throw new Error('failed to locate vue-module template: ' + name);

    var attrs = opts.once ? 'v-once' : '';
    opts.template = '<div ' + attrs + ' class="' + name + '">' + tmpl.innerHTML + '</div>';
    Vue.component(name, opts);
  };

  Vue.module = function (name, opts) {
    var root = document.currentScript.ownerDocument;
    document.addEventListener('WebComponentsReady', function () {
      Vue.moduleRooted(root, name, opts);
    });
  };
};
