```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Razze
    filters:
      and:
        - tipo == "razza"
    order:
      - file.name
      - Abilità
      - Linguaggi

```
