```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Trappole
    filters:
      and:
        - Tipo == "trappola"
    order:
      - file.name
```
