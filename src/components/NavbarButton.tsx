import { Box, Divider } from "@mui/material";
import { useNavigate } from "react-router";

const NavbarButton = (props: {
  label: string;
  href: string;
  onSubmit?: any;
  underline?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <Box>
      <button
        onClick={() => navigate(props.href)}
        className={
          "bg-primary text-secondary hover:bg-primary-hover rounded-lg p-1 m-1"
        }
        style={{ width: "fit-content", cursor: "pointer" }}
      >
        <p className={`text-lg`}> {props.label}</p>
      </button>
      {props.underline && (
        <Divider
          sx={{
            color: "primary.main",
            border: 1,
            borderWidth: 1,
          }}
        ></Divider>
      )}
    </Box>
  );
};

export default NavbarButton;
