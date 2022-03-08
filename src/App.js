import React from "react";
import Index from "./pages";
import ViewportProvider from "./provider/ViewportProvider";

const App = () => {
  return (
    <ViewportProvider>
      <Index />
    </ViewportProvider>
  );
};

export default App;
