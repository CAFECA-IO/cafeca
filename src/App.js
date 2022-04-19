import React from "react";
import Index from "./pages";
import ViewportProvider from "./provider/ViewportProvider";
import StateProvider from "./provider/StateProvider";

const App = () => {
  return (
    <StateProvider>
      <ViewportProvider>
        <Index />
      </ViewportProvider>
    </StateProvider>
  );
};

export default App;
