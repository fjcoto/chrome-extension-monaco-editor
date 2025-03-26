self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        return './worker-loader-proxy.js?label=' + label;
    }
};

require.config({ paths: { vs: './vs' } });

require(['vs/editor/editor.main'], function () {
    const container = document.getElementById('container');
    const editor = monaco.editor.create(container, {
        value: '-- Monaco en iframe',
        language: 'sql',
        theme: 'vs-dark',
        automaticLayout: true
    });

    window.addEventListener('message', (event) => {
        if (event.data?.type === 'setValue') {
            editor.setValue(event.data.value || '');
        }
    });

    editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        parent.postMessage({ type: 'updateTextarea', value }, '*');
    });
});  