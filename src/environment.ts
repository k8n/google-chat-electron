import {app} from "electron";

export default Object.freeze({
  isTesting: (process.env.NODE_ENV === 'testing') && !app.isPackaged,
  isDev: !app.isPackaged,
  isSnap: require('electron-is-snap').isSnap,
  appUrl: 'https://chat.google.com/',
  logoutUrl: 'https://www.google.com/accounts/Logout?continue=https://chat.google.com/'
})
