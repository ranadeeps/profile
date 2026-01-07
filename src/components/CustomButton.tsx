import { Box, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const CustomButton = (props: {
  label: string;
  href?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  onSubmit?: any;
  underline?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <Box display={"flex"} flexDirection={"column"} margin={"auto"}>
      {props.href ? (
        <button
          onClick={() => {
            navigate(props.href as string);
          }}
          style={{ cursor: "pointer" }}
        >
          <Typography>{props.label}</Typography>
        </button>
      ) : props.type ? (
        <button type={props.type} style={{ cursor: "pointer" }}>
          <Typography>{props.label}</Typography>
        </button>
      ) : (
        <button>
          <Typography>{props.label}</Typography>
        </button>
      )}
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
