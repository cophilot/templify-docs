import { ReactNode } from 'react';
import { AppearanceProvider } from './AppearanceProvider';

interface Props {
    children: ReactNode;
}

export function Providers({ children }: Props) {
    return <AppearanceProvider>{children}</AppearanceProvider>;
}
