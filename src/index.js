import React from "react";
import ReactDOM from "react-dom";
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

LogRocket.init("xhkolm/jahanzaib-suleman");

// after calling LogRocket.init()
setupLogRocketReact(LogRocket);

// Sentry.init({
//   dsn: "https://55ed917ab90c44789c593f915aeed0ee@o884142.ingest.sentry.io/5837100",
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

LogRocket.identify("THE_USER_ID_IN_YOUR_APP", {
  name: "James Morrison",
  email: "jamesmorrison@example.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
