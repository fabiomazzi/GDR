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
      - VIG req
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
    columnSize:
      file.name: 156
      note.VIG req: 75
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
      - VIG req
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
      note.VIG req: 66
      note.DES req: 80
      note.Capacità Speciali: 233

```

### 2H
L'arma va utilizzata con due mani.
Occupa due [[06 Scheda personaggio#🧰 Armi e Oggetti|slot comodi]].
###  (A) Agile
Con quest'arma aggiungi [[Destrezza]] al danno invece che [[Vigore]].
### Capacità speciali
Classi e talenti danno la possibilità di usare le capacità speciali segnate in questa colonna.
### (D) Dalla distanza
Con quest'arma minacci entro la gittata indicata e puoi attaccare dalla distanza.
Aggiungi [[Destrezza]] al danno invece che [[Vigore]].
Se attacchi con un’arma dalla distanza un nemico [[#Distanze|adiacente]], non aggiungere la [[Destrezza]] al danno.
Per ogni incremento di gittata hai -4 al tiro per colpire.
*Esempio: se la gittata è 6m, fra 6 e 12 metri hai -4, fra 12 e 18 metri hai -8, etc.*
*Esempio: se la gittata è 20m, fra 20 e 40 metri hai -4, fra 40 e 60 metri hai -8, etc.*
### Difesa
Come ci si difende dagli attacchi di quest'arma. Vedi [[03 Combattimento#Risolvere un'azione|risolvere un'azione]].
### DES/MAG/VIG/VOL req
Abilità richiesta per usare l'equipaggiamento. I requisiti si sommano.

Se un’arma ti fa scegliere tra [[Destrezza]] e [[Vigore]], aggiungerai quello che usi come requisito al danno.

Se per esempio voglio indossare un’armatura media (VIG 2), uno scudo grande (VIG 2) e una spada corta (VIG 1 o DES 1) devo avere uno fra:
- VIG 5
- VIG 4 e DES 1 (in questo caso la spada corta aggiungerò DES invece che VIG al danno)
### (L) Da lancio
Deve essere lanciata.
### Naturale
È un'arma che fa parte del tuo corpo, come le mani, una coda, il morso, etc.
### Tipo di danno
A = Affilato
C = Contundente
M = Magico
N = Necrotico
P = Perforante
T = Tagliente
