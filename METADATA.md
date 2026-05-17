---
author: beto.group
version: 1.0.1
id: search-query-101
name: SEARCH QUERY
description: A minimal, real-time search component that filters vault files by name using a text input.
status: stable
complexity: plug-n-play
category:
  - Query Builder
  - Data Visualizer
  - Search
compatibility:
  - Obsidian >=1.5.0
  - Datacore >=0.8.0
repository:
  - https://github.com/beto-group/SearchQuery
missing:
  - Media-Showcase-Capture
resources:
  - search_query.webp
  - searchquery.clip.gif
type: DatacoreComponent
target: Datacore
security:
  - Sandboxed
storage:
  - None
network: Offline
runtime: PureJS
entry_point: SEARCH QUERY.md
logic: src/SearchQuery.component.jsx
---

# SEARCH QUERY METADATA

This file contains the machine-readable packaging manifest and indexing properties for the **SEARCH QUERY** component. 

By offloading the indexing tags here, the primary entry point `SEARCH QUERY.md` remains dedicated to user-facing custom view settings and interactive configuration.
