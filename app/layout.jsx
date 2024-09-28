import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "PromptGenie",
  description: "Generate & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
