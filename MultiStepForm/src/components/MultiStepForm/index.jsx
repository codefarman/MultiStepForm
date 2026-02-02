import { Box, Typography, Button } from "@mui/material";
import { useMemo, useState } from "react";
import StepRenderer from "./StepRenderer";
import ProgressBar from "./ProgressBar";
import { PROGRAM_FLOW } from "../../data/multiStepFormData";
import { STEP_TITLES, BENEFITS } from "./StepMeta";
import { PURPLE, BG_LIGHT } from "../../theme/brand";

export default function MultiStepForm() {
  const [data, setData] = useState({ program: null });
  const [stepIndex, setStepIndex] = useState(0);

  const flow = useMemo(() => {
    if (!data.program) return ["program"];
    return ["program", ...(PROGRAM_FLOW[data.program] || PROGRAM_FLOW.UG)];
  }, [data.program]);

  const totalSteps = data.program ? flow.length : PROGRAM_FLOW.UG.length + 1;
  const currentStepKey = flow[stepIndex];
  const currentTitle = STEP_TITLES[currentStepKey] || "Select an option";

  const handleNext = () =>
    setStepIndex((p) => Math.min(p + 1, totalSteps - 1));
  const handleBack = () =>
    setStepIndex((p) => Math.max(p - 1, 0));

  const isStepValid = () => {
    if (currentStepKey === "final") return true;
    return data[currentStepKey] != null && data[currentStepKey] !== "";
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: BG_LIGHT,
      }}
    >
      {/* CENTERED CONTENT WRAPPER */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pb: { xs: 4, sm: 8 },
        }}
      >
        {/* HEADER AREA: Title + Progress Bar */}
        <Box
          sx={{
            width: "98%",
            maxWidth: 900,
            mx: "auto",
            px: { xs: 0.5, sm: 2.5 },
            py: { xs: 0.8, sm: 1.2 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {/* STEP INDICATOR */}
          <Box sx={{ mb: 0.5 }}>
            <Box
              sx={{
                display: "inline-block",
                bgcolor: `${PURPLE}12`,
                color: PURPLE,
                px: 1.6,
                py: 0.35,
                borderRadius: 10,
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              Step {stepIndex + 1} of {totalSteps}
            </Box>
          </Box>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: {
                xs: "1.1rem",
                sm: "1.4rem",
                md: "1.8rem",
              },
              lineHeight: 1.2,
            }}
          >
            {currentTitle}
          </Typography>

          <Typography
            sx={{
              color: PURPLE,
              fontWeight: 600,
              fontSize: { xs: "0.72rem", sm: "0.82rem" },
              mt: -0.5,
              mb: 1,
            }}
          >
            Talk to certified counsellors for the best course & university
          </Typography>

          {/* PROGRESS BAR - MOVED BELOW TITLE */}
          <Box sx={{ width: "96%", maxWidth: 600 }}>
            <ProgressBar step={stepIndex + 1} total={totalSteps} />
          </Box>

        </Box>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            width: "96%",
            maxWidth: 1100,
            mx: "auto",
            px: { xs: 0.5, sm: 1.5 },
            pt: 0.5,
          }}
        >
          <StepRenderer
            stepKey={currentStepKey}
            data={data}
            setData={setData}
            goNext={handleNext}
          />
        </Box>
      </Box>

      {/* FLOATING NAV BUTTONS */}
      {currentStepKey !== "final" && (
        <>
          {stepIndex > 0 && (
            <Button
              variant="outlined"
              onClick={handleBack}
              sx={{
                position: "fixed",
                bottom: { xs: 16, sm: "50%" },
                left: { xs: 16, sm: 32 },
                transform: { sm: "translateY(50%)" },
                width: 44,
                height: 44,
                minWidth: "unset",
                borderRadius: "50%",
                borderColor: "#cbd5e1",
                bgcolor: "white",
                color: "#475569",
                fontSize: "1.05rem",
                zIndex: 50,
              }}
            >
              ←
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isStepValid()}
            sx={{
              position: "fixed",
              bottom: { xs: 16, sm: "50%" },
              right: { xs: 16, sm: 32 },
              transform: { sm: "translateY(50%)" },
              width: 44,
              height: 44,
              minWidth: "unset",
              borderRadius: "50%",
              fontWeight: 700,
              bgcolor: PURPLE,
              fontSize: "1.05rem",
              zIndex: 50,
              "&.Mui-disabled": {
                bgcolor: "#e5e7eb",
                color: "#94a3b8",
              },
            }}
          >
            →
          </Button>
        </>
      )}
    </Box>
  );
}
