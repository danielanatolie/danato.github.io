# Static site starter

A dependency-free HTML, CSS, and JavaScript starter with generic sample content.

## Structure

```text
./
├── index.html              # Page structure and metadata
├── .nojekyll               # Serve files without Jekyll processing
├── assets/
│   ├── css/main.css        # Layout, typography, and colors
│   ├── js/main.js          # Sample content rendering
│   └── images/             # Image assets
├── data/
│   └── sample-items.js     # Replaceable sample entries
└── README.md
```

## Local preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Use a local server because the JavaScript uses ES modules.

## Editing

- Change page structure in `index.html`.
- Adjust styles in `assets/css/main.css`.
- Replace entries in `data/sample-items.js`.
- Add browser behavior in `assets/js/main.js`.
- Store images in `assets/images/` and reference them with relative URLs.

## GitHub Pages

The repository root is the complete publishable site. Keep all asset URLs relative so it works at either a domain root or a repository subpath.

In the repository's Settings > Pages, choose Deploy from a branch, then select the branch containing these files and the `/ (root)` folder.
