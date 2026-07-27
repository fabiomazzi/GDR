```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Provenienze
    filters:
      and:
        - Tipo == "provenienza"
    order:
      - file.name
      - Abilità
    sort: []
```
