import { LatBar } from '../components/LatBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="App">
      <main className="Main">{children}</main>
      <LatBar />
    </div>
  );
};
