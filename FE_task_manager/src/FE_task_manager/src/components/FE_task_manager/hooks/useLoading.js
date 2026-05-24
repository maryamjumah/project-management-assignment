import { useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(false);

  const start = () => setLoading(true);
  const stop = () => setLoading(false);

  return { loading, start, stop };
}
