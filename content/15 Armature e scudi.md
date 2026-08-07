# Armature
```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Armature
    filters:
      and:
        - Tipo == "armatura"
        - Magico != true
    order:
      - file.name
      - Armatura
      - FF req
      - DES req
      - Malus DES
      - Capacità Speciali
      - Note
    sort:
      - property: Armatura
        direction: ASC
    columnSize:
      note.Armatura: 89
      note.FF req: 67
      note.Malus DES: 96
      note.DES req: 79
      note.VOL req: 82
      note.MAG req: 87
  - type: table
    name: Armature magiche
    filters:
      and:
        - Tipo == "armatura"
        - Magico == true
    order:
      - file.name
      - Armatura
      - FF req
      - Malus DES
      - VOL req
      - MAG req
      - DES req
      - Note
      - Capacità Speciali
    sort: []
    columnSize:
      note.Armatura: 89
      note.FF req: 67
      note.Malus DES: 96
      note.DES req: 79
      note.VOL req: 82
      note.MAG req: 87

```

# Scudi
```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Scudi
    filters:
      and:
        - Tipo == "scudo"
        - Magico != true
    order:
      - file.name
      - Bloccare
      - Parare
      - Malus DES
      - FF req
      - DES req
      - Capacità Speciali
      - Note
    sort:
      - property: Bloccare
        direction: ASC
    columnSize:
      note.Bloccare: 88
      note.Parare: 65
      note.Malus DES: 95
      note.FF req: 68
      note.DES req: 78
      note.Capacità Speciali: 515
  - type: table
    name: Scudi magici
    filters:
      and:
        - Tipo == "scudo"
        - Magico == true
    order:
      - file.name
      - Bloccare
      - Parare
      - Malus DES
      - FF req
      - DES req
      - Capacità Speciali
      - Note
    sort:
      - property: file.name
        direction: ASC
      - property: Bloccare
        direction: ASC
    columnSize:
      note.Bloccare: 88
      note.Parare: 65
      note.Malus DES: 95
      note.FF req: 68
      note.DES req: 78
      note.Capacità Speciali: 515

```

### Armatura
Riduci il danno subito di questo valore. Non ha effetto contro danni magici o necrotici.
### Bloccare/Parare
Bonus al tuo [[06 Scheda personaggio#🛡️ Difese|bloccare/parare]].
### FF/DES/MAG/VOL
[[05 Abilità|Abilità]] richiesta per usare l'equipaggiamento. I requisiti si sommano.
Se per esempio voglio indossare un’armatura media (FF 2), uno scudo grande (FF 2) e una spada corta (FF 1 o DES 1) devo avere uno fra:
- FF 5
- FF 4 e Destrezza 1 (in questo caso la spada corta userà DES come Colpire)
### Malus DES
Malus alla tua [[Destrezza]].