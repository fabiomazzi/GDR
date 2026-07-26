```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Abilità
    filters:
      and:
        - Tipo == "Abilità"
    order:
      - file.name
      - Classi
      - Razze
      - Provenienze
    columnSize:
      note.Classi: 646
      note.Razze: 227

```

Per fare una prova di Abilità tira 1d12 e aggiungi il bonus che hai in quell’abilità.  
Confronta il risultato con:
- una Difficoltà (DIF) decisa dal Master → se il risultato è uguale o superiore, hai superato la prova.
- oppure un tiro contrapposto da parte di un altro personaggio → entrambi fanno una prova di abilità e chi ottiene il risultato più alto vince. In caso di pareggio si ritira.  

*Esempi di prove:*
*accorgersi di una trappola → Percezione contro la DIF della trappola*
*saltare un fossato → Forma Fisica contro la DIF decisa da master*
*braccio di ferro → Forma Fisica contro Forma Fisica*  
*borseggiare un passante → Furtività contro Percezione*

*Diverse abilità possono sovrapporsi o lavorare insieme. Per esempio viaggiando in mezzo ad un bosco qualcosa di particolare potrebbe attirare la vostra attenzione, come un ramo tagliato artificialmente (Sopravvivenza) o qualcosa che si muove fra gli alberi (Percezione). Una volta notato che c’è qualcosa che non va, un tiro su Perspicacia può farvi capire che state per cadere vittime di un’imboscata.*
## Tabella guida alle DIF

| Difficoltà      | Valore | Note                              |
| --------------- | ------ | --------------------------------- |
| Facile          | 3      | Chiunque, senza distrazioni       |
| Normale         | 5      | Serve concentrazione o esperienza |
| Difficile       | 8      | Richiede competenze               |
| Molto difficile | 12     | Solo esperti o allenati           |
| Disumana        | 15     | Fortuna o bravura straordinaria   |

