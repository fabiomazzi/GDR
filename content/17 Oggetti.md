```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Oggetti
    filters:
      and:
        - Tipo == "oggetto"
    order:
      - file.name
```
