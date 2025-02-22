'use client';

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-4 h-dvh overflow-hidden">{children}</div>;
}
