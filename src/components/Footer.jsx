import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <footer className="flex justify-center gap-2 border-content p-8">
        <CopyrightIcon />
        <p>2023 | Coded with ❤️ by Tushar Anekar</p>
      </footer>
    </div>
  );
};

export { Footer };
