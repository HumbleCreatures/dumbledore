# Manuell installation

## Att ha förinstallerat
[NodeJs](https://nodejs.org)
[Visual Studio Code](https://code.visualstudio.com)
[Dumbledore Repot](https://github.com/HumbleCreatures/dumbledore)

## Sätta upp projekt från början
Kör `npx create-nx-workspace@latest`

Välj:
`√ Choose your style                     · integrated
√ What to create in the new workspace   · react
√ Repository name                       · dumbledore
√ Application name                      · dumbledore-app
√ Default stylesheet format             · styled-components
√ Enable distributed caching to make your CI faster · No`


Lägg till api skriva tester mot.
`npm install --save-dev @nrwl/express`
`npx nx g @nrwl/express:app dumbledore-api`

Lägg till komponent bibliotek
`npx nx g @nrwl/react:library dumbledore-ui`

Lägg till storybook till bibiliotek
`npx nx g @nrwl/react:storybook-configuration dumbledore-ui`

### Lägg till paket
React redux 
`npm install react-redux`

Redux toolkit 
`npm install @reduxjs/toolkit`

React router 
`npm install react-router-dom`

React query 
`npm install react-query`

CORS
`npm install cors`

Nock
`npm install --save-dev nock`

### Köra projectet. Samma om du laddat hem repot.
`clone `
`cd dumbledore`
`npm install`
`npx nx run api`

Öppna ny terminal och gå till samma katalog:
`npx nx run web`


### Länkar
[Redux Toolkit](https://redux-toolkit.js.org)
[React Router](https://reactrouter.com)
[React Query](https://react-query-v3.tanstack.com)
[Nx](https://nx.dev)



### Uppgift
Skapa ärende med titel och beskrivning.
Lista ärende med titel och datum.
Visa ett specifikt ärende. Titel, beskrivning och datum.

Spara nytt ärende till server.
Hämta alla ärenden från servern.
Hämta ett specifikt ärende från servern.

Stänga ett ärende.
Lista stängda ärenden för sig.
Lista öppna ärenden för sig.

### Pass 1 - Komponent anatomi
Grundläggande genomgång hur en react komponent funkar med props, state och lifecycle.
Gå igenom hur typescript hjälper till att validera och kommuncera data som komponenter använder.
Skillnad på vykomponenter och datakomponenter. Hur kan storybok hjälpa oss att skilja på vyer och logik.
Hur återanvänder man kod och css i react med hjälp av StyledComponentes.

#### Uppgift 1
Skapa en komponent för att skapa ett ärende
Skapa en komponent för att lista ärenden.
Skapa en kompontent för att visa ett ärende.
(Använd storybook och stories för att skicka in data)

### Pass 2 - Ryskadocken problemet
Hur skickas samma data till komponenter fler olika komponenter.
Strategier för att undvika att skicka data till komponenter som bara vidarebefodrar datan till andra komponenter.
Skillnanden på intentioner och data, anledningen till att reducer-mönster är så populärt.
Dela upp datan i slices med redux och redux-toolkit.
Arbeta med asynkront data i redux med AsyncThunk.

#### Uppgift 2
Sätta upp redux i appen.
Skapa en slice för ärenden.
Använda AsyncThunk för att skapa ärende.
Använda AsyncThunk för att hämta ett ärende.
Rendera data i vy-komponenterna.


### Pass 3 - Alternativ state-hantering.
Sätta upp react-router för att kunna använda url för state-hantering.
Använda react query för att hämta data från servern.

#### Uppgift 3
Sätt upp react-router.
Skapa en route för att hämta ett specifikt ärende.
Använda react query för att hämta alla ärenden.


### Pass 4 - Test all the things
Testa logik i komponenter med Jest och react-testing-library.
Testa komponenter som anropar server-tjänster med nock.
Testa redux logik med Jest.
Testa AsyncThunk med nock.

#### Uppgift 4
Testa en vykomponent.
Testa en komponent som använder react query med hjälp av nock.
Skriv ett för en action.

### Bonus om det finns tid över.
Titta på NextJs och server rendering.
Titta på React Native.
