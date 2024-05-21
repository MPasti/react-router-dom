import { Outlet, useParams, useSearchParams } from "react-router-dom";

export function Post() {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  //http://localhost:5173/posts/10?page=100&comment=segundo
  //para usar query string
  console.log(id);
  return (
    <div>
      <h1>
        Post {`param: ${id} QS: ${qs.get("page")} &  ${qs.get("comment")}`}
      </h1>
      <Outlet />
    </div>
  );
}
