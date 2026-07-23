```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Talenti
    filters:
      and:
        - tipo == "talento"
    order:
      - file.name

```
