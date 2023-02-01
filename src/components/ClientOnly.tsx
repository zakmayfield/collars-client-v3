import { useEffect, useState } from 'react';

type ClientOnlyProps = {
  children: React.ReactNode;
  [x: string]: any;
};

export default function ClientOnly({ children, ...rest }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...rest}> {children}</div>;
}
