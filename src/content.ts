const disclaimerTd = document.querySelector("td[style*='background-color:#F76464']") as HTMLTableCellElement | null;
if (disclaimerTd) {
    disclaimerTd.style.display = 'none';
    console.log('[Extensión] Disclaimer ocultado (desde TypeScript)');
}

(() => {
    console.log('[Extensión] Iniciando content script...');

    // 🔍 Buscar el textarea original
    const textarea = document.querySelector<HTMLTextAreaElement>('textarea[name="sql_query"]');
    if (!textarea) {
        console.warn('[Extensión] No se encontró el <textarea> sql_query');
        return;
    }

    textarea.style.display = 'none';
    const value = textarea.value;
    const parent = textarea.parentElement;

    const iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('editor.html');
    iframe.style.width = '100%';
    iframe.style.height = '250px';
    iframe.style.border = 'none';
    parent?.appendChild(iframe);

    iframe.onload = () => {
        iframe.contentWindow?.postMessage({ type: 'setValue', value }, '*');
        console.log('[Extensión] Valor inicial enviado al iframe');
    };

    window.addEventListener('message', (event) => {
        if (event.data?.type === 'updateTextarea') {
            textarea.value = event.data.value;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
})();
