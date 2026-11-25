import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { night: "#0a0a0a", dusk: "#ffb0c4", sand: "#fff9cb", violet: "#8b5cf6" },
    fontFamily: { display: ["var(--face-display)", "Impact", "sans-serif"], sans: ["var(--face-body)", "Helvetica Neue", "sans-serif"] },
    keyframes: { rise: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } } },
    animation: { rise: "rise 350ms ease-out both" },
  } },
} satisfies Config;
