RO-METRONOM — WEBAPP VERSION 2.1
================================

NYT I VERSION 2.1
- Opdateret lydmotor med ekstra tydelige klik til iPhones lille højttaler.
- Tre lydprofiler under Indstillinger > Lyd > Lydprofil:
  Blød (som før), Tydelig og Ekstra tydelig (standard).
- Glat lydbegrænsning mod digital overstyring. Telefonens højttaler
  bestemmer den faktiske maksimale lydstyrke.
- Tydeligere klik uden at ændre klokkens advarsel på de sidste tre slag.
- Udseende, nedtælling, to forskellige tempi og tidsintervaller beholdt.
- Eksisterende 2.0-indstillinger bevares, herunder lydstyrke og BPM.
- Ny service worker-cache tvinger opdatering af installeret webapp.

OPDATERING PÅ GITHUB
1. Gå til dit repository Ro-Metronom-Web.
2. Upload alle seks filer fra DENNE mappe i roden, ikke mappen selv.
3. Overskriv de tidligere filer med samme navn og Commit changes.
4. Afvent grønt flueben på Actions > pages build and deployment.
5. Luk webappen på iPhone helt, og åbn den igen.
6. Kontrollér at der står 'Webversion 2.1' nederst i appen.
   Hvis ikke: åbn webadressen i Safari først, genstart webappen.

LYDSTYRKE
Prøv indstillingen 'Ekstra tydelig'. Start ved lav lydstyrke ved
brug af høretelefoner, og skru gradvist op. iPhone kan begrænse
maksimal lydstyrke afhængigt af udstyr, rute og systemindstillinger.

BEGRÆNSNING
Webappen kan stadig blive sat på pause, når iPhones skærm låses.
Den native iPhone-app løser på sigt dette med egentlig baggrundslyd.
