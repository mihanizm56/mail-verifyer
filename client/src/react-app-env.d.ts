/// <reference types="react-scripts" />

// external libs declaration
declare module 'classnames';
declare module 'react-router-dom'
declare module 'react-redux'




declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}