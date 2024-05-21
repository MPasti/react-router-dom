import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Post } from "./components/Post";
import { Redirect } from "./components/Redirect";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Post />} />
      {/* <Route path="/posts/:id" element={<Post />} /> */}
      <Route path="/posts/" element={<Post />}>
        <Route path=":id" element={<div>Rota aninhada</div>} />
      </Route>
      <Route path="/redirect" element={<Redirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
