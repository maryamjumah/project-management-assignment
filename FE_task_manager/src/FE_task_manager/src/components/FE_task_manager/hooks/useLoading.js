import { useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(false);

  function start() {
    setLoading(true);
  }

  function stop() {
    setLoading(false);
  }

  return { loading, start, stop };
}
