```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Talenti
    filters:
      and:
        - Tipo == "talento"
    sort:
      - property: file.name
        direction: ASC
```
Non puoi guadagnare più volte lo stesso talento, tranne dove indicato.