import { LiveReload, Outlet } from "@remix-run/react"
export default function App(){
  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
        <title>Remix cazzo duro app for dummies</title>
      </head>
      <body>
        <h1>Hello cazzo duro</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}