import * as Sentry from "@sentry/react";

const methodDoesNotExist = {};
const Example = () => {
  return (
    <>
      <h1>this is example</h1>
      <button onClick={methodDoesNotExist.a.b}>Break the wzzorld</button>;
    </>
  );
};

Sentry.withErrorBoundary(Example, { fallback: "an error has occurred" });

export default Example;
