RO-METRONOM – WEBAPP 2.2
=========================

DET NYE I 2.2
- Midten af ringen er nu fri for sekundtal. En tydelig, blød ravgylden puls
  følger hvert metronomslag, synkroniseret efter lydmotorens ur.
- En meget tynd, afdæmpet ravfarvet cirkel vokser i takt med den forløbne
  tid, når Automatisk skift er aktivt. En fuld omgang = perioden for det
  aktuelle tempo, uanset om perioden er 1 eller 5 minutter.
- En lille tekst UNDER ringen viser 'Skift om 1:00' eller 'Skift om 42 s'.
- Den oprindelige varme, behagelige lyd fra version 2.0 er genskabt;
  lydprofil-vælgeren fra 2.1 er helt fjernet.
- Begge tempi har fortsat individuelle varigheder, og de sidste tre slag
  kan markeres med den diskrete klokkelyd (eller andre signaler).
- Indstillingerne fra 2.0/2.1 videreføres. Lydprofil-valget ignoreres.

INSTALLATION – OPDATER DEN EKSISTERENDE GITHUB PAGES-WEBAPP
1. Udpak zip-filen på Windows.
2. Åbn DanOerum/Ro-Metronom-Web på GitHub under fanen Code.
3. Vælg Add file > Upload files.
4. Upload alle SEKS filer inde i mappen (ikke selve mappen).
5. Commit changes direkte på main, og vent på grøn Pages-udgivelse.
6. Luk Ro-Metronom helt på iPhonen og åbn igen fra hjemmeskærmen.
7. Kontrollér teksten 'Webversion 2.2' nederst i appen.
   Hvis du ser den gamle version, prøv først et nyt besøg i Safari.

FILER
- index.html: app, lyde, betjening og animation
- sw.js: offline cache (ny cache-version for 2.2)
- manifest.webmanifest: hjemmeskærmsinstallation
- icon-192.png og icon-512.png: eksisterende appikoner
- README.txt: denne vejledning

BEGRÆNSNING
Web Audio på iPhone kan blive sat på pause, når skærmen låses.
En indfødt iOS-app er nødvendig for pålidelig lyd under låst skærm.
