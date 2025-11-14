import { Box, LinearProgress, Typography } from "@mui/material";

export const SkillBox = (props: {
  skill: { name: string; rating: number; experience: number };
}) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "primary.main",
        borderRadius: 5,
        px: 2,
        mr: 1,
        minWidth: 200,
      }}
    >
      <Typography variant="h6">{props.skill.name}</Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <LinearProgress
          variant="determinate"
          value={props.skill.rating * 10} // converts 0–10 to 0–100
          sx={{ width: "100%", height: 10, borderRadius: 5 }}
        />
        <Typography variant="body2" textAlign={"right"}>
          {props.skill.rating}/10
        </Typography>
      </Box>
      <Typography variant="body1">
        Experience: {props.skill.experience} Years
      </Typography>
    </Box>
  );
};
