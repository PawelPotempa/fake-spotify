## Spotify Clone

<hr>
I've created this project in order to practice TypeScript and learn more about Next.JS, especially the SSR and new middleware functions. It's also another at creating a TailwindCSS interface.</br>

## How to use

<li>Open the REAL Spotify app on your device
<li>Play and immediately pause any song
<li>Log in to the Spotify CLONE with a valid premium account

## The project

The project uses the Spotify API to act as a 'remote' of sorts for the real application.

Among the implemented features, the most prominent are:

<li>Usage of the Spotify API to remotely control the music player
<li>NextAuth.JS used for authentication via the Spotify API
<li>Debounced volume control
<li>Middleware responsible for route protection
<li>SSR to get session context from NextAuth.JS
<li>Custom hooks

## Technologies

<hr>
<img align="center" alt="Next.JS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/><img align="center" alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/><img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/><img align="center" alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img align="center" alt="SpotifyAPI" src="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white"/><img align="center" alt="Recoil" src="https://img.shields.io/badge/Recoil-007AF4?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyMzY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjMwIDExIDI3LjUgNzgiPjxyZWN0IGZpbGw9IiMwMDdhZjQiIGhlaWdodD0iOTUiIHJ4PSIxMCIgd2lkdGg9IjkwIi8+PGNpcmNsZSBjeD0iNDMuNSIgY3k9IjE4LjUiIGZpbGw9IiNmZmYiIHI9IjcuNSIvPjxjaXJjbGUgY3g9IjQzLjUiIGN5PSI4MS41IiBmaWxsPSIjZmZmIiByPSI3LjUiLz48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyI+PHBhdGggZD0iTTQzLjk5OSAyNUM0Mi41IDM3IDU3LjUgMzQgNTcuNSA0Mi41YzAgNS01Ljg3OCA2LjM2NS0xMy41MDEgN0MzNy45OTkgNTAgMzAgNTAgMzAgNThzMTYgNS41IDEzLjk5OSAxN00zNC4xMzIgMzMuMzUzYzAgMTUuMjg5IDIzLjE1IDE4LjI4OSAyMy4xNSAzMi42MiIvPjwvZz48L3N2Zz4=&logoColor=white"/>

## What I've learned

<hr>

<li>I've significantly improved my fluency with TypeScript, including more complicated components, as well as learned more about proper folder structure, typing environment variables etc.
<li>It was my first attempt at using middleware, which in my application was used to protect certain routes, redirect the user and so on.
<li>I've learned how to use NextAuth.JS with JWT and custom providers.
<li>Tackles some TailwindCSS customization, such as creating my own classes, animations etc.
<li>I've also honed my knowledge about creating custom hooks and using the built-in hooks. 
<li>Also improved my project folder structure significantly.

## Questions

While creating the application, many questions arose, some of which I couldn't easily find an answer to. They're more of a "what's the correct approach" rather than "how to do it", but I'd love to do more research on that.

<li>When using CSS Modules, if the same element exists between multiple components, how do I structure that? Using a specific module for 'global elements' comes to mind, yet seems counterintuitive towards the idea of readability.
<li>When creating forms with a lot of inputs, should they be written out one by one, or is creating a config object and mapping them out a better approach? What are the pros and cons?
<li>Custom hook vs. separate file for reusable functions.
<li>How to properly type refs properly when dealing with complex components instead of HTML elements?
<li>If fetching data in SSR, is using an useEffect to immediately set that data to a global state a good practice? My guts tell me it isn't.
<li>If data is set in a global state, is it ever more performant to pass it as props instead of using the global state?

## Resources

<hr>
<li> <a href="https://www.typescriptlang.org/">📜 TypeScript documentation - the permanently opened chrome tab</a>
<li> <a href="https://next-auth.js.org/">🔒 NextAuth.js documentation</a>
<li> <a href="https://stackoverflow.com/">🙃 StackOverflow, as usual</a>
<li> <a href="https://www.youtube.com/c/SonnySangha"> The incredible map of the Tatra Mountains</a>

## Thanks for reading!
