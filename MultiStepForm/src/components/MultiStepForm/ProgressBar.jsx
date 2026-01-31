import { Box, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GRADIENT } from "../../theme/brand";

const BorderLinearProgress = styled(LinearProgress)({
  height: 5,
  borderRadius: 4,
  backgroundColor: "#e2e8f0",
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
    background: GRADIENT,
  },
});

export default function ProgressBar({ step, total }) {
  const value = (step / total) * 100;
  return (
    <Box sx={{ width: "100%" }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  );
}