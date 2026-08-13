```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Classi
    filters:
      and:
        - Tipo == "classe"
    order:
      - file.name
      - PV
      - Abilità
      - Descrizione
    sort: []
    columnSize:
      file.name: 135

```
