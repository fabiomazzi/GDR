```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Incantesimi
    filters:
      and:
        - tipo == "incantesimo"
    order:
      - file.name
      - Costo
      - Difesa
      - Durata
      - Gittata
      - Rapido
    sort: []
    columnSize:
      note.Costo: 61
      note.Rapido: 68

```
