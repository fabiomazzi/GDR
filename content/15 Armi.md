```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Armi
    filters:
      and:
        - Tipo == "arma"
        - Magico != true
    order:
      - file.name
      - Danno
      - FF req
      - DES req
      - Difesa
      - 2h
      - A
      - L
      - T
      - P
      - C
      - Capacità Speciali
      - Note
    sort:
      - property: Danno
        direction: ASC
      - property: Note
        direction: ASC
    columnSize:
      note.FF req: 66
      note.DES req: 80
      note.Capacità Speciali: 233
  - type: table
    name: Armi magiche
    filters:
      and:
        - Tipo == "arma"
        - Magico == true
    order:
      - file.name
      - Danno
      - FF req
      - DES req
      - Difesa
      - 2h
      - A
      - L
      - T
      - P
      - C
      - Capacità Speciali
      - Note
    sort:
      - property: Danno
        direction: ASC
      - property: Note
        direction: ASC
    columnSize:
      note.FF req: 66
      note.DES req: 80
      note.Capacità Speciali: 233

```

### FF/DES/MAG/VOL req
Abilità richiesta per usare l'equipaggiamento. I requisiti si sommano.
Se per esempio voglio indossare un’armatura media (FF 2), uno scudo grande (FF 2) e una spada corta (FF 1 o DES 1) devo avere uno fra:
- FF 5
- FF 4 e Destrezza 1 (in questo caso la spada corta userà DES come Colpire)
Se un’arma ti fa scegliere tra FF o DES, devi usare quello che scegli anche come Colpire.

### Difesa
Come ci si difende dagli attacchi di quest'arma.

### 2h
L'arma va utilizzata con due mani.

### Agile (A)
Puoi usare DES come Colpire con quest'arma.
### Lancio (L)
L'arma può essere lanciata.
### Tipo di danno
T: Tagliente
C: Contundente
P: Perforante
M: Magico
N: Necrotico