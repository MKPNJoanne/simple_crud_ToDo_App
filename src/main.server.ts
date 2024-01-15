export { AppServerModule as default } from './app/app.module.server';
import 'localstorage-polyfill'

global['localStorage'] = localStorage;
