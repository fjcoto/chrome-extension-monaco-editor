# Chrome Extension – Monaco Editor Injection

This is a Chrome Extension built with **Vite + React + TypeScript** that replaces a specific `<textarea>` on a web page with a **Monaco Editor** (Visual Studio Code’s editor component). The extension is designed to work with **Manifest V3** and uses an **iframe-based strategy** to overcome Chrome's strict Content Security Policy (CSP).

---

## 🚀 Purpose

The purpose of this extension is to enhance a legacy web interface by injecting a modern code editor (Monaco Editor) in place of a `<textarea>` used to input SQL queries. This improves the user experience by providing features such as:

- Syntax highlighting
- Autocompletion
- Better layout and usability
- Safer and clearer code editing

---

## 📅 Project Structure

```
my-chrome-extension/
├── public/
│   ├── editor.html            # Iframe page that loads Monaco
│   ├── editor.js              # Editor initialization logic
│   └── worker-loader-proxy.js # Proxy to load Monaco workers correctly
├── src/
│   └── content.ts             # Content script injected into target pages
├── manifest.json             # Chrome Extension manifest (v3)
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
└── README.md
```

---

## 🚀 How to Run It

1. **Install dependencies**

```bash
npm install
```

2. **Build the project**

```bash
npm run build
```

This will output the extension files to the `/build` directory.

3. **Load the extension in Chrome**

- Open `chrome://extensions`
- Enable "Developer Mode"
- Click "Load unpacked"
- Select the `/build` directory

4. **Test it on a target page**

Go to the page where the `<textarea name="sql_query">` exists. The extension will:

- Hide the disclaimer `<td>` with the red background
- Replace the `<textarea>` with an iframe
- Load Monaco Editor inside the iframe
- Sync changes from Monaco back to the hidden `<textarea>`

---

## 🔐 Notes

- This extension is CSP-compliant for Manifest V3.
- Monaco workers are loaded via `worker-loader-proxy.js` to avoid CSP issues with `importScripts()`.
- You can customize the Monaco configuration by editing `editor.js`.

---

## 🌟 Credits

- Built with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [Monaco Editor](https://github.com/microsoft/monaco-editor)

---

## ✨ License

This project is open-source and available for personal or educational use.