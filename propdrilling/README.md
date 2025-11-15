# Prop Drilling Example - App -> Header -> Icon -> UserProfile

This small Vite + React sample demonstrates **prop drilling**: passing a `username` prop from the top-level `App` component down through `Header` and `Icon` into `UserProfile` (none of the intermediate components use the prop themselves).

## Files in this project
- `index.html` - app entry
- `package.json` - scripts and deps
- `src/main.jsx` - React entry
- `src/App.jsx` - defines `username` and passes it to `Header`
- `src/Header.jsx` - receives `username` and forwards to `Icon`
- `src/Icon.jsx` - forwards to `UserProfile`
- `src/UserProfile.jsx` - consumes `username` and displays it
- `src/App.css` - minimal styling

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Step-by-step explanation of prop drilling
1. `App.jsx` owns the data: `const username = "Alice";`
2. `App` passes `username` to `Header` via props: `<Header username={username} />`
3. `Header` doesn't use `username` but forwards it: `<Icon username={username} />`
4. `Icon` also forwards: `<UserProfile username={username} />`
5. `UserProfile` finally reads and displays the `username` prop.

This shows how props must be passed through intermediate components that do not use them — this is **prop drilling**.
