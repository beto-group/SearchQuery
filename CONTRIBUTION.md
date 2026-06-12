# Contribution Guidelines — Search Query

Welcome! This component is part of the BetoOS Datacore library. Please adhere to the following architectural standards.

## Codebase Architecture

The module utilizes a split-file structure to guarantee legibility, testability, and isolated execution scopes:

```text
SearchQuery/
├── SEARCH QUERY.md        # Obsidian entry point
├── METADATA.md            # Component manifest
├── README.md              # Documentation
├── CONTRIBUTION.md        # This file
├── LICENSE.md             # MIT license
├── assets/
│   ├── image/
│   │   └── preview_1.webp  # Static preview image
│   └── videos/
│       └── preview.gif     # Immersive preview clip
└── src/
    ├── App.jsx            # Main bootstrap application loader
    └── SearchQuery.component.jsx # React layout component for filtering notes
```

## Core Architectural Pillars

### Blazing Performance: Zero-Lag Inputs
Never block the main rendering thread when the user is actively typing.
*   Keep the React render loop lightweight and free of heavy synchronous folder scanning.
*   Rely on Datacore's reactive cache engine for fast lookup matching.

### Sterile Zero-Dependency Architecture
*   Do not import or depend on heavy third-party npm packages.
*   Rely strictly on native React/Preact hooks and Obsidian Core API adapters.

### Sandboxed Styling (Anti-Bleed Protocol)
*   Ensure all CSS layout changes are strictly scoped within component style declarations.
*   Never bleed general tags or global styles into the native Obsidian workspace.

## Development Workflow

### Local Compiling & Rebuilding
To make updates and verify correctness:
1. Make your modifications in the `src/` directory.
2. The custom compilation bundler inside the Obsidian workspace will pick up code changes instantly.

---
*Thank you for helping us build the ultimate high-performance database workspace!*
*Beto Group LLC | Institutional Engineering Division*
