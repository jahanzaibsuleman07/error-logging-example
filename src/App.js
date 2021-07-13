import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";
import Example from './Example';

function FallbackComponent() {
  return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;

function App() {
  return (
    <Sentry.ErrorBoundary fallback={myFallback} showDialog>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
        <Example />
      
    </div>
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App, { name: "CustomAppName" });
