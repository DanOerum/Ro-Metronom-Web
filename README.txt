ROMETRONOM – iPhone-webapp, version 1
=====================================

Indhold
- index.html: Selve appen, inkl. metronomlyd (kræver ingen internetforbindelse, når den er installeret)
- manifest.webmanifest: Gør appen klar til "Føj til hjemmeskærm"
- sw.js: Offline-cache på en HTTPS-adresse
- icon-192.png og icon-512.png: Appikoner

Sådan virker appen
1. Vælg 21 eller 42 BPM, og tryk Start. Der er ét klik pr. slag.
2. Tryk på det andet tempo for straks at skifte.
3. Slå "Automatisk skift" til, og vælg fx 1 minut.
4. Under indstillinger kan du ændre begge tempi, lyd og lydstyrke.
   Indstillingerne gemmes på telefonen.

Sådan får du den på din iPhones hjemmeskærm
Filerne skal først ligge på en webadresse (helst HTTPS), eksempelvis GitHub Pages,
dit eget webhotel eller en webserver. Du kan også lægge mappen på en Home
Assistant-webserver under /config/www/rometronom (adressen bliver normalt
https://DIN-HOME-ASSISTANT/local/rometronom/).
Åbn adressen i Safari på iPhone, tryk Del og vælg "Føj til hjemmeskærm".

Vigtigt om iPhone
Webversionen bør bruges med tændt skærm. iOS kan stoppe weblyd, når skærmen
låses, eller appen lægges i baggrunden. Til garanteret fortsat metronomlyd med
låst skærm skal vi lave en egentlig iOS-app med audio background mode.

Bemærk: Første tryk på Start er nødvendigt for at tillade lyd på iPhone.
