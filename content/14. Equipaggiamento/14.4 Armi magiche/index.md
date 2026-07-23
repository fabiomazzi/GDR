```base
properties:
  note.contundente:
    displayName: C
  note.des req:
    displayName: DES
  note.ff req:
    displayName: FF
  note.agile:
    displayName: A
  note.perforante:
    displayName: P
  note.tagliente:
    displayName: T
  note.lancio:
    displayName: L
  note.parare:
    displayName: Parare
  file.name:
    displayName: Nome
  note.danno:
    displayName: Danno
  note.capacità speciali:
    displayName: Capacità Speciali
  note.note:
    displayName: Note
views:
  - type: table
    name: Armi magiche
    filters:
      and:
        - tipo == "arma"
        - magico == true
    order:
      - file.name
      - danno
      - ff req
      - des req
      - parare
      - 2h
      - Difesa
      - agile
      - contundente
      - perforante
      - tagliente
      - lancio
      - capacità speciali
      - note.note
    sort:
      - property: danno
        direction: ASC
    columnSize:
      note.danno: 86
      note.ff req: 31
      note.des req: 50
      note.parare: 68
      note.Difesa: 65
      note.contundente: -10
      note.capacità speciali: 192

```
