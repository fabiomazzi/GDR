```base
properties:
  note.ff req:
    displayName: FF
  note.des req:
    displayName: DES
  note.parare:
    displayName: Parare
  note.capacità speciali:
    displayName: Capacità Speciali
  note.note:
    displayName: Note
  file.name:
    displayName: Nome
  note.destrezza:
    displayName: Malus DES
  note.bloccare:
    displayName: Bloccare
views:
  - type: table
    name: Scudi
    filters:
      and:
        - tipo == "scudo"
        - magico == false
    order:
      - file.name
      - bloccare
      - ff req
      - des req
      - parare
      - destrezza
      - capacità speciali
      - note.note
    sort:
      - property: bloccare
        direction: ASC
      - property: Armatura
        direction: ASC
    columnSize:
      note.bloccare: 81
      note.ff req: 29
      note.des req: 47
      note.parare: 67
      note.destrezza: 97

```
