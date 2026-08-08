---
Tipo: classe
PV: "4"
Abilità: Magia, Volontà
---
Descrizione della classe, che farò con calma.
> Descrizione meta temporanea: ha un servitore non-morto permanente più un piccolo esercito di non-morti al seguito. Può consumare la loro energia vitale per bonus immediati, curare, esplosioni, etc

**PV:** 4  
**Abilità:** [[Magia]], [[Volontà]]

---
## 
### Livello 1
- **Reazione**: *<uno dei tuoi non morti minaccia l’attaccante>* quel non-morto usa una capacità o un attacco su di lui.
- [[Evoca servitore]] diventa permanente se evochi un servitore non-morto.
- [[#Esercito di non-morti]].
### Livello 2
- I bersagli afflitti dal tuo [[Scacciare non morti]] diventano invece sotto il tuo controllo per 1 turno per livello da Necromante, non sono considerati parte del tuo esercito di non-morti.
- Puoi [[#CONSUMARE UN NON-MORTO|consumare]] uno dei tuoi non-morti.
### Livello 3
- I tuoi servitori non-morti hanno dei bonus (da fare).
### Livello 4
- Puoi avere fino a due servitori non-morti, il limite per gli altri rimane (se evochi un servitore elementale tutti gli altri servitori spariscono).

---
## Esercito di non-morti
Quando un [[98 FAQ#Essere senziente|essere senziente]] muore entro 10 metri, usando una reazione puoi reindirizzare la sua forza vitale per creare un non-morto dalla tabella qui sotto. L'essere che muore deve essere di un livello almeno pari a quello richiesto dal non-morto.  
A discrezione del master puoi usare un cadavere nei dintorni che non ha più legami col suo mondo di origine (= non serve al master), oppure crearne uno.

Rimane sotto il tuo controllo fino a quando viene distrutto, lo consumi, superi il limite di creature o decidi di liberarlo. In tutti i casi i resti collassano sul posto diventano polvere.

In ogni momento puoi avere un numero massimo di non-morti sotto il tuo controllo pari al tuo livello (anche i servitori contano).  
Se superi questo limite collassano a partire dal primo.

I tuoi non-morti agiscono subito prima o subito dopo il tuo turno seguendo i tuoi comandi. Se non sei in grado di comandarli continuano a seguire l’ultimo comando fino a quando possibile, poi rimangono inerti.

| Tipo                  | Liv richiesto     | PV  | Danno | Colpire | Difesa     | Abilità                                                                                                                                                            | Note                 |
| --------------------- | :---------------- | --- | ----- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| Scheletro             | 0 (anche critter) | 3   | 1d4 T | 1       | 0          | Se è distrutto, all'inizio del suo prossimo turno si riforma. Quel turno non ha Azioni. È resistente ai danni taglienti e perforanti, debole a quelli contundenti. |                      |
| Zombie                | 0 (anche critter) | 4   | 1d4 C | 2       | Armatura 1 | È resistente ai danni contundenti e perforanti, debole a quelli taglienti.                                                                                         |                      |
| Zombie infuocato      | 1                 | 3   | /     | /       | Armatura 1 | All'inizio del turno infligge 1d4 +1 per livello danni da fuoco intorno a lui. È resistente ai danni contundenti e perforanti, debole a quelli taglienti.          |                      |
| Zombie ristoratore    | 1                 | 8   | /     | /       | Armatura 1 | Con un'Azione può toccare un essere e cedergli PV pari alla tua Volontà. È resistente ai danni contundenti e perforanti, debole a quelli taglienti.                | Perde i PV che cede. |
| Zombie incanalatore   | 2                 | 3   | /     | LIV +2  | Armatura 1 | Puoi usarlo come tramite per i tuoi incantesimi. È resistente ai danni contundenti e perforanti, debole a quelli taglienti.                                        |                      |
| Scheletro guerriero   | 3                 | 10  | 2d4 T | 3       | 0          | Se è distrutto, all'inizio del suo prossimo turno si riforma. Quel turno non ha Azioni. È resistente ai danni taglienti e perforanti, debole a quelli contundenti. |                      |
| Zombie guerriero      | 3                 | 16  | 2d4 C | 4       | Armatura 3 | È resistente ai danni contundenti e perforanti, debole a quelli taglienti.                                                                                         |                      |
| Scheletro incantatore | 3                 | 6   | /     | 4       | 0          | Come Azione può lanciare gli incantesimi: Dardo Elementale (fa danno magico).                                                                                      |                      |
| altri [da fare]       |                   |     |       |         |            | da valutare se usare direttamente le schede dei mob                                                                                                                |                      |
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
      - Note
    sort:
      - property: Liv richiesto
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.Abilità: 699

```

### Consumare un non-morto
Con un Azione puoi togliere l’energia vitale di unnon-morti nel tuo esercito per uno dei seguenti effetti:
- cura un bersaglio entro 10m del non-morto di PV pari a quelli rimanenti al non-morto
- fai esplodere il non-morto, fa danni pari ai suoi PV rimanenti suddivisi come vuoi ai bersagli adiacenti a lui
- riciclare la sua energia vitale per creare un non-morto che richiede un livello inferiore del suo (puoi consumare uno scheletro incantatore per creare un non-morto che richiede livello 2 o inferiore)
- [da fare]