# 🤝 Contributing to Search Query: Engineering & Architectural Standards

Welcome to the **Search Query** contributor guide. This component serves as a fundamental, high-performance reference architecture for reactive query inputs inside Obsidian.

To maintain the architectural integrity, blazing performance, and premium aesthetics of this ecosystem, all contributions must strictly adhere to the following standards.

---

## 1. Core Architectural Pillars

### ⚡ Blazing Performance: Zero-Lag Inputs
Never block the main rendering thread when the user is actively typing.
*   Keep the React render loop lightweight and free of heavy synchronous folder scanning.
*   Rely on Datacore's reactive cache engine for fast lookup matching.

### 🧩 Sterile Zero-Dependency Architecture
*   Do **not** import or depend on heavy third-party npm packages.
*   Rely strictly on native React/Preact hooks and Obsidian Core API adapters.

### 🛡️ Sandboxed Styling (Anti-Bleed Protocol)
*   Ensure all CSS layout changes are strictly scoped within component style declarations.
*   Never bleed general tags or global styles into the native Obsidian workspace.

---

## 2. Development Workflow

### A. Local Compiling & Rebuilding
To make updates and verify correctness:
1. Make your modifications in the `src/` directory.
2. The custom compilation bundler inside the Obsidian workspace will pick up code changes instantly.

---
*Thank you for helping us build the ultimate high-performance database workspace!*
*Beto Group LLC | Institutional Engineering Division*
