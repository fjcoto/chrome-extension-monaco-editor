const params = new URLSearchParams(location.search);
const label = params.get('label');
let workerMain = '';

switch (label) {
    case 'json':
        workerMain = './vs/language/json/json.worker.js';
        break;
    case 'css':
    case 'scss':
    case 'less':
        workerMain = './vs/language/css/css.worker.js';
        break;
    case 'html':
    case 'handlebars':
    case 'razor':
        workerMain = './vs/language/html/html.worker.js';
        break;
    case 'typescript':
    case 'javascript':
        workerMain = './vs/language/typescript/ts.worker.js';
        break;
    default:
        workerMain = './vs/editor/editor.worker.js';
}

importScripts(workerMain);
