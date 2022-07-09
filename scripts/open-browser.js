let start = '';
switch (process.platform) {
  // Mac OS
  case 'darwin':
    start = 'open';
    break;

  // Windows
  case 'win32':
    start = 'start';
    break;

  // Linux
  default:
    start = 'xdg-open';
    break;
}

require('child_process').exec(`${start} http://localhost:3000`);
