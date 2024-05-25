export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
           <body>
                SIDEBAR
                {children}
                </body>
            </html>
  );
}
