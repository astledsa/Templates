import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

createRoot(document.getElementById("root")!).render(
        <StrictMode>
                <ConvexProvider client={convex}>
                        <App />
                </ConvexProvider>
        </StrictMode>,
);