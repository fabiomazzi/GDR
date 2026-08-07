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
      - D
      - L
      - T
      - P
      - C
      - Gittata
      - Capacità Speciali
      - Note
    sort:
      - property: L
        direction: DESC
      - property: D
        direction: DESC
      - property: file.name
        direction: ASC
      - property: Danno
        direction: ASC
    columnSize:
      file.name: 156
      note.A: 21
      note.C: -1
      note.Gittata: 64
      note.Capacità Speciali: 509
      note.Note: 324
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

Se un’arma ti fa scegliere tra [[Forma Fisica]] o [[Destrezza]], devi usare quello che scegli anche come [[06 Scheda personaggio#🎯 Colpire|colpire]].
### Difesa
Come ci si difende dagli attacchi di quest'arma. Vedi [[03 Combattimento#Risolvere un'azione|risolvere un'azione]].
### 2H
L'arma va utilizzata con due mani.
Occupa due [[06 Scheda personaggio#🧰 Armi e Oggetti|slot comodi]].
###  (A) Agile
Con quest'arma puoi usare [[Destrezza]] come [[06 Scheda personaggio#🎯 Colpire|colpire]].
### (D) Dalla distanza
Con quest'arma minacci entro la gittata indicata e puoi attaccare dalla distanza.
Devi usare [[Destrezza]] come [[06 Scheda personaggio#🎯 Colpire|colpire]].
Se attacchi con un’arma dalla distanza un nemico [[#Distanze|adiacente]], non mettere [[06 Scheda personaggio#🎯 Colpire|colpire]] al danno.
Per ogni incremento di gittata hai -4 a colpire.
*Esempio: se la gittata è 6m, fra 6 e 12 metri hai -4, fra 12 e 18 metri hai -8, etc.*
*Esempio: se la gittata è 20m, fra 20 e 40 metri hai -4, fra 40 e 60 metri hai -8, etc.*
### (L) Da lancio
Deve essere lanciata.
### Tipo di danno
T: Tagliente
C: Contundente
P: Perforante
M: Magico
N: Necrotico
### Capacità speciali
Classi e talenti danno la possibilità di usare le capacità speciali segnate in questa colonna.