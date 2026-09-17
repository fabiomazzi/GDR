---
Tipo: classe
PV: "4"
Abilità: ["[[Magia]]", "[[Volonta]]"]
Descrizione: "[temporanea] ha un servitore non-morto permanente più un piccolo esercito di non-morti al seguito. Può consumare la loro energia vitale per bonus immediati, curare, esplosioni, etc"
---
---
## Work in progress: da valutare se usare direttamente le schede degli npc per i non-morti, bisogna in ogni caso farne un po'. Ci sono varie meccaniche che rischiano di diventare "infinite" dato che il creare non-morti al momento non ha limite, tipo il recuperare mana all'infinito, bisogna tenerle d'occhio.
### Livello 1
- **Reazione**: *<uno dei tuoi non-morti minaccia l’attaccante>* quel non-morto usa una capacità o un attacco su di lui.
- [[Evoca servitore]] diventa permanente se evochi un servitore non-morto.
- I bersagli afflitti dal tuo [[Scacciare non-morti]] diventano sotto il tuo controllo invece di essere spaventati, non sono considerati parte del tuo esercito di non-morti.
- [[#Esercito di non-morti]].
### Livello 2
- Quando lanci l'incantesimo [[Risucchio vitale]] puoi bersagliare tutti i nemici entro 4m invece che un singolo bersaglio.
- Puoi lanciare [[Tocco necrotico]] usando un tuo non-morto come [[12 Magia#Tramite|tramite]].
### Livello 3
- **Reazione**: *\<sei un difensore che sta subendo danno>* devia metà del danno su un tuo servitore.
- Puoi [[#CONSUMARE UN NON-MORTO|consumare]] uno dei tuoi non-morti.
### Livello 4
- Puoi avere fino a due servitori non-morti, il limite per gli altri rimane (se evochi un servitore elementale tutti gli altri servitori spariscono).

---
## Esercito di non-morti
Quando un [[98 FAQ#Essere senziente|essere senziente]] muore entro 20 metri, usando una reazione puoi reindirizzare la sua forza vitale e creare un non-morto dalla tabella qui sotto. L'essere che muore deve essere di un livello almeno pari a quello richiesto dal non-morto.  
Puoi usare un cadavere nei dintorni che non ha più legami col mondo *(non serve al master)*, crearne uno o farlo emergere dal terreno. Deve in ogni caso essere entro 10m da te.

Rimane sotto il tuo controllo fino a quando viene distrutto, lo consumi, superi il limite di creature o decidi di liberarlo. In tutti i casi i resti collassano sul posto e diventano polvere.

In ogni momento puoi avere un numero massimo di non-morti sotto il tuo controllo pari al tuo livello (i servitori non contano).  
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
      - Liv
      - PV
      - Precisione
      - Danno
      - Difesa
      - Abilità
    sort:
      - property: Liv
        direction: ASC
      - property: Liv richiesto
        direction: ASC
    columnSize:
      note.Abilità: 888

```
*Gli scheletri sono resistenti ai danni taglienti e perforanti, deboli a quelli contundenti.*
*Gli zombie sono resistenti ai danni contundenti e perforanti, deboli a quelli taglienti.*
*Gli spettri sono resistenti ai danni fisici, deboli a quelli magici.*
### Consumare un non-morto
Da livello 3, con un'[[02 Incontri e riposare#Il tuo turno|azione]] puoi consumare l’energia vitale di un non-morto del tuo esercito per uno dei seguenti effetti:
- recupera mana pari al livello richiesto per crearlo
- fai esplodere il non-morto, fa danni pari ai suoi [[06 Scheda personaggio#🩷 Punti Vita (PV)|punti vita]] rimanenti suddivisi come vuoi ai bersagli adiacenti a lui, ci si difende [[06 Scheda personaggio#🛡️ Difese|schivando]] o [[06 Scheda personaggio#Difese|bloccando]]
- riciclare la sua energia vitale per creare un non-morto che richiede un livello inferiore del suo
