import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import my from './components/my.vue'
import { store } from './store/store.js';
import parent from './components/parent.vue';
// Create the app and use the store
const app = createApp(App); // Pass App directly here

// If you want to register other components globally, you can do it like this:


// app.component('OtherComponent', OtherComponent);
app.component('my', my);

// Use the store
app.use(store);
app.component('parent', parent);

// Mount the app to the DOM
app.mount('#app');
