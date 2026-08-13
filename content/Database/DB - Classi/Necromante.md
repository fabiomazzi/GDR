---
Tipo: classe
PV: "4"
Abilità: "[[Magia]], [[Volontà]]"
Descrizione: "[temporanea] ha un servitore non-morto permanente più un piccolo esercito di non-morti al seguito. Può consumare la loro energia vitale per bonus immediati, curare, esplosioni, etc"
---
## Work in progress: da valutare se usare direttamente le schede degli npc per i non-morti, bisogna in ogni caso farne un po'. Ci sono varie meccaniche che rischiano di diventare "infinite" dato che il creare non-morti al momento non ha limite, tipo il recuperare mana all'infinito, bisogna tenerle d'occhio.
### Livello 1
- **Reazione**: *<uno dei tuoi non-morti minaccia l’attaccante>* quel non-morto usa una capacità o un attacco su di lui.
- [[Evoca servitore]] diventa permanente se evochi un servitore non-morto.
- I bersagli afflitti dal tuo [[Scacciare non-morti]] diventano invece sotto il tuo controllo per 1 turno per livello da Necromante, non sono considerati parte del tuo esercito di non-morti.
- [[#Esercito di non-morti]].
### Livello 2
- Quando lanci l'incantesimo [[Risucchio vitale]] puoi bersagliare tutti i nemici entro 4m invece che un singolo bersaglio.
- [[Tocco necrotico]] ti cura di metà del danno fatto.
### Livello 3
- **Reazione**: *\<sei un difensore che sta subendo danno>* fai subire ad un tuo servitore metà del danno.
- Puoi [[#CONSUMARE UN NON-MORTO|consumare]] uno dei tuoi non-morti.
### Livello 4
- Puoi avere fino a due servitori non-morti, il limite per gli altri rimane (se evochi un servitore elementale tutti gli altri servitori spariscono).

---
## Esercito di non-morti
Quando un [[98 FAQ#Essere senziente|essere senziente]] muore entro 20 metri, usando una reazione puoi reindirizzare la sua forza vitale per creare un non-morto dalla tabella qui sotto. L'essere che muore deve essere di un livello almeno pari a quello richiesto dal non-morto.  
Puoi usare un cadavere nei dintorni che non ha più legami col mondo *(non serve al master)*, crearne uno o farlo emergere dal terreno. Non cambia ai fini di regolamento ma deve essere entro 10m da te.

Rimane sotto il tuo controllo fino a quando viene distrutto, lo consumi, superi il limite di creature o decidi di liberarlo. In tutti i casi i resti collassano sul posto e diventano polvere.

In ogni momento puoi avere un numero massimo di non-morti sotto il tuo controllo pari al tuo livello (anche i servitori contano).  
Se superi questo limite collassano a partire dal primo.

I tuoi non-morti agiscono subito prima o subito dopo il tuo turno seguendo i tuoi comandi. Se non sei in grado di comandarli continuano a seguire l’ultimo comando fino a quando possibile, poi rimangono inerti.
```base
properties:
  file.name:
    displayName: Nome
views:
  - type: table
    name: Non-morti
    filters:
      and:
        - Tipo == "non-morto esercito"
    order:
      - file.name
      - Liv richiesto
      - PV
      - Danno
      - Colpire
      - Difesa
      - Abilità
    sort:
      - property: Liv richiesto
        direction: ASC
    columnSize:
      note.Abilità: 888

```
*Gli scheletri sono resistenti ai danni taglienti e perforanti, deboli a quelli contundenti.*
*Gli zombie sono resistenti ai danni contundenti e perforanti, deboli a quelli taglienti.*
### Consumare un non-morto
Con un [[02 Incontri e riposare#Il tuo turno|azione]] puoi consumare l’energia vitale di un non-morto nel tuo esercito per uno dei seguenti effetti:
- recupera mana pari al livello richiesto per crearlo
  >*se diventa troppo forte limitarla come numero di utilizzi*
- fai esplodere il non-morto, fa danni pari ai suoi [[06 Scheda personaggio#🩷 Punti Vita (PV)|punti vita]] rimanenti suddivisi come vuoi ai bersagli adiacenti a lui, ci si difende [[06 Scheda personaggio#🛡️ Difese|schivando]] o [[06 Scheda personaggio#Difese|bloccando]]
- riciclare la sua energia vitale per creare un non-morto che richiede un livello inferiore del suo
*se consumi un non-morto che richiede livello 3, puoi creare un non-morto che richiede livello 0, 1 o 2*
