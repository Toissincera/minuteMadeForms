import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Fetcher from "./Fetcher";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Fetcher />
    </QueryClientProvider>
  );
}
