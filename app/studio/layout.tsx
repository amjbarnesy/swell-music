export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Studio needs the full viewport — no nav or footer
  return <>{children}</>;
}
