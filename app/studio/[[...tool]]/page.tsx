// Metadata must live in the server component — studio itself renders client-side
export const metadata = { title: "Swell Music CIC — Studio" };

import StudioClient from "./StudioClient";

export default function StudioPage() {
  return <StudioClient />;
}
