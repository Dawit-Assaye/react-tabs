import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Tabs from "./components/Tabs";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs />
    </QueryClientProvider>
  );
};

export default App;
