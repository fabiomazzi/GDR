```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Provenienze
    filters:
      and:
        - tipo == "provenienza"
    order:
      - file.name
      - Abilità

```
