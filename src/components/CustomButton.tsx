import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const CustomButton = (props: {
  label: string;
  href?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  onSubmit?: any;
}) => {
  const navigate = useNavigate();

  return (
    <>
      {props.href ? (
        <Button
          sx={{ padding: 0, margin: 0 }}
          onClick={() => {
            navigate(props.href as string);
          }}
        >
          <Typography>{props.label}</Typography>
        </Button>
      ) : props.type ? (
        <Button
          sx={{ padding: 0, margin: 0 }}
          type={props.type}
          variant="outlined"
        >
          <Typography>{props.label}</Typography>
        </Button>
      ) : (
        <Button sx={{ padding: 0, margin: 0 }}>
          <Typography>{props.label}</Typography>
        </Button>
      )}
    </>
  );
};
