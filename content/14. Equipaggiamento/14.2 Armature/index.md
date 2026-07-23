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
views:
  - type: table
    name: Armature
    filters:
      and:
        - tipo == "armatura"
        - magico == false
    order:
      - file.name
      - Armatura
      - ff req
      - des req
      - parare
      - destrezza
      - capacità speciali
      - note.note
    sort:
      - property: Armatura
        direction: ASC
    columnSize:
      note.Armatura: 104
      note.ff req: 29
      note.des req: 47
      note.parare: 67
      note.destrezza: 99

```
