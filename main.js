let output = ``;

// CONTENT.forEach(item => {

// });

const app = Vue.createApp({
  data() {
    return {
      samples: CONTENT
    };
    return {
      name: 'PHP',
      code: `<?php
      echo "Hello, world!";
    ?>`
    }
  }
});


const mountedApp = app.mount('#app');
// Prism.highlightAll();