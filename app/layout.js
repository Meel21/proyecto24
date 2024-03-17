import './styles.css'

export const metadata = {
  title: "Proyecto",
  description: "Este es un proyecto de prueba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="test">{children}</body>
    </html>
  );
}
