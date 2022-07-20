import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Loader from "./pages/Loader";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Category />
        <Suspense fallback={<Loader />}>
          <Pages />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
