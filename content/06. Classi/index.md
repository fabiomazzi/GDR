---
title: 05. Classi
---
```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Classi
    filters:
      and:
        - tipo == "classe"
    order:
      - file.name
      - PV
      - Abilità

```
