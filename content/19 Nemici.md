```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Nemici
    filters:
      and:
        - Tipo == "nemico"
    order:
      - file.name
```
