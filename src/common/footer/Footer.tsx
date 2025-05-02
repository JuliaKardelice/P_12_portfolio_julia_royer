// import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Julia Royer. Tous droits réservés.
      </p>
    </footer>
  );
};
