import AppRoutes from "./routes/AppRoutes";

import ThemeProvider from "./components/common/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;