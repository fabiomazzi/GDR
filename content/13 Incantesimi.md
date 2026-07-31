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
    columnSize:
      note.Costo: 64
      note.difesa: 194

```

### Costo
Il [[06 Scheda personaggio#Mana|mana]] che viene usato per lanciare l'incantesimo
### Durata
All'inizio di ogni tuo turno riduci di 1 la durata di ogni effetto “dura X turni" generato da te, se scende a 0 termina.
Alla fine di ogni riposo scala di 1 la durata degli incantesimi che durano “1 giorno” o “1 giorno per livello”, se scende a 0 termina.
Un incantesimo permanente non ha durata.
### Gittata
La distanza massima del punto da cui si calcola l'area di effetto.

Un incantesimo o effetto magico a contatto è un attacco con un’arma naturale che il bersaglio può solo [[06 Scheda personaggio#Difese|schivare]]. L’unico effetto di questo attacco è l’incantesimo. Se l’attacco manca, l’incantesimo è sprecato. Se colpisci rilasci l’incantesimo contro il quale ci si difende normalmente.  

Se invece l’incantesimo a contatto è lanciato con un [[12 Magia#Tramite|tramite]], l’incantesimo può essere rilasciato come parte di un normale attacco, in questo caso l’incantesimo si applica in aggiunta ai normali effetti dell’attacco (come danno, lesioni, etc.). Vedi [[12 Magia#Tramite|tramite]].
### Difesa
Il tiro che deve fare chi vuole resistere all'incantesimo. In caso di successo l'incantesimo non ha effetto, tranne dove indicato diversamente.