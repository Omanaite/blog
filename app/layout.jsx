import Link from 'next/link';
const links = [{
  label: 'Home',
  route: '/' 
}, {
  label: 'Login',
  route: '/login'
}];


export default function RootLayout( {children} ) {  
  return (
    <>
      <html>
        <head>
          <title>BiblioLipsia with Next 14</title>
        </head>
        <body>
          <header>
          <nav>
            <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
          </header>

          {children}</body>
      </html>
      
    </>
  );
}