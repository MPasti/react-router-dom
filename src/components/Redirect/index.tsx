import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      //se você coloca um replace, você perde a pagina que você redirecionou no passado
      //, {replace: }
      navigate("/", {
        state: `State of the previous page ${Math.random()}`,
      });
    }

    //para nao deixar lixo no código
    return () => {
      clearTimeout(timeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return <h1>Get out of here in {time}</h1>;
}
