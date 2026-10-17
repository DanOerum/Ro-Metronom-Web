RO-METRONOM — WEBAPP VERSION 2.0
================================

NYT I VERSION 2.0
- Stor ring viser sekunder til næste automatiske temposkift frem for BPM.
- Hvert tempo kan have sin egen varighed (10-900 sekunder, standard 60/60).
- Højere og tydeligere metronomlyd med kompressor/peak-begrænsning.
- Advarsel på sidste tre slag: klokkelyd, lysere klik, ekko eller fra.
- Bevarer tidligere indstillinger fra version 1, inklusive BPM.
- Forbedret offline-cache, så webappen kan opdateres.

BRUG
- De to store knapper viser, hvilket tempo der er valgt (21 og 42 BPM som standard).
- Start/Stop starter metronomen. Automatisk skift vælges med kontakten.
- Ringen tæller ned til næste skift, når automatisk skift er aktivt.
- Med automatisk skift slået fra viser ringen en streg (der er intet planlagt skift).
- Når metronomen er stoppet, vises antal sekunder for den kommende periode.
- I Indstillinger kan BPM og varighed for både roligt og hurtigt tempo justeres.
- Når du ændrer en tid eller vælger en anden tempostilling, nulstilles den aktuelle periode.
- Advarselstypen vælges under Indstillinger / Lyd.
- Start med moderat lydstyrke, især med hovedtelefoner.

OPDATER DIN GITHUB PAGES-SIDE (Ro-Metronom-Web)
1. Pak ZIP-filen ud på din Windows-computer.
2. Gå til dit GitHub-repository Ro-Metronom-Web → Code → Add file → Upload files.
3. Upload ALLE FILER inde fra denne mappe til roden af repositoriet.
4. GitHub bør skrive, at de fem eksisterende filer bliver erstattet.
5. Klik Commit changes og vent til Pages har udgivet den nye version.
6. Luk Ro-Metronom helt på din iPhone og åbn igen. Det kan tage en ekstra genstart
   eller opdatering før iOS bruger den nye service worker.

VIGTIGT
Webappen kan stoppe med at spille, når iPhone-skærmen låses. Det er en
begrænsning i iOS/webapps og kan ikke loves løst uden en egentlig iOS-app.
GitHub Pages kræver HTTPS, hvilket det allerede bruger.
