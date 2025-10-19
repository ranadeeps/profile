import { Button, Typography } from "@mui/material";

export const CustomButton = (props: {
  label: string;
  href?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  onSubmit?: any;
}) => {
  return (
    <>
      {props.href ? (
        <Button sx={{ padding: 0, margin: 0 }} href={props.href}>
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
