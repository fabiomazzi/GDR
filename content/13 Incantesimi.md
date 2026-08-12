```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Incantesimi
    filters:
      and:
        - Tipo == "incantesimo"
    order:
      - file.name
      - Costo
      - Durata
      - Gittata
      - Rapido
      - Difesa
    sort:
      - property: Gittata
        direction: DESC
      - property: file.name
        direction: ASC
      - property: Difesa
        direction: ASC
    columnSize:
      note.Costo: 75

```

### Costo
Il [[06 Scheda personaggio#🔮 Mana|mana]] che viene usato per lanciare l'incantesimo
### Durata
All'inizio di ogni tuo turno riduci di 1 la durata di ogni effetto “dura X turni" generato da te, se scende a 0 termina.
Alla fine di ogni riposo scala di 1 la durata degli incantesimi che durano “1 giorno” o “1 giorno per livello”, se scende a 0 termina.
Un incantesimo permanente non ha durata.
### Gittata
La distanza massima che possono avere i bersagli dell'incantesimo. Se è ad area è la distanza dal punto centrale dell'area.

Un incantesimo o effetto magico a contatto è un attacco con un’arma naturale che usa Destrezza come colpire, si può solo [[06 Scheda personaggio#🛡️ Difese|schivare]]. L’unico effetto di questo attacco è il rilascio dell’incantesimo contro il quale ci si difende normalmente. Se l’attacco manca, l’incantesimo è sprecato.

Se invece l’incantesimo a contatto è lanciato con un [[12 Magia#Tramite|tramite]], l’incantesimo può essere rilasciato come parte di un normale attacco, in questo caso l’incantesimo si applica in aggiunta ai normali effetti dell’attacco (come danno, lesioni, etc.). Vedi [[12 Magia#Tramite|tramite]].
### Difesa
Il tiro che deve fare chi vuole resistere all'incantesimo. In caso di successo l'incantesimo non ha effetto, tranne dove indicato diversamente.