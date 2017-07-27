vue-module
==========

Define Vue components using a web components-like syntax. See the ``example``
for more info.

You'll likely need to first load ``webcomponents-lite.js``, which can be
found `here <https://github.com/webcomponents/webcomponentsjs>`_.

Quick demo
**********

In *index.html*:

.. code-block:: html

  <head>
    <script src="https://unpkg.com/vue"></script>
    <!-- Load vue-module.js -->
    <script src="../vue-module.js"></script>
    <script src="https://cdn.jsdelivr.net/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>

    <!-- Register vue-module  -->
    <script> Vue.use(VueModule); </script>
    <!-- Load our example component -->
    <link rel="import" href="example-component.html">
  </head>

  <body>
    <div id="example-app">
      <example-component></example-component>
    </div>

    <script>
      document.addEventListener('WebComponentsReady', function() {
        new Vue({el: '#example-app'})
      });
    </script>
  </body>

In *example-component.html*:

.. code-block:: html

  <vue-module id="example-component">
    <!-- Or: -->
    <!-- <div vue-module="example-component"> -->
    <template>
      <p>{{message}}</p>
    </template>

    <script>
      Vue.module('example-component', {
        data: function() {
          return { message: 'Hello!' };
        },

        // If you need to use v-once, then add:
        once: true,
      });
    </script>
  </vue-module>

Styling
*******

When you use *vue-module*, your elements are automatically wrapped in a div with a class the
same name as your component. For example:

.. code-block:: html

  <vue-module id="my-component">
    <!-- Styling goes here! -->
    <style>
    .my-component p { color: purple; }
    </style>

    <template>
      <p>My module!</p>
    </template>

    <script>
      Vue.module('my-component');
    </script>
  </vue-module>
