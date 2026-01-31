import { Box } from "@mui/material";
import OptionCard from "../OptionCard";
import { useState } from "react";

export default function GenericSelectionStep({
  options = [],
  selectedValue,
  onSelect,
  goNext,
}) {
  const [processing, setProcessing] = useState(false);

  const handleSelect = (val) => {
    if (processing) return;
    setProcessing(true);
    onSelect(val);
    setTimeout(goNext, 100);
  };

  const isCompact = options.length <= 4;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 1.5, sm: 2.5, md: 3 }, // Gap similar to before
        justifyContent: "center", // ✅ Centers the last row
        Width: "100%",
        maxWidth: { xs: "100%", sm: 900, md: 1100 },
        margin: "0 auto",
        py: { xs: 1.5, sm: 3 },
      }}
    >
      {options.map((opt) => {
        const value = opt.value;
        const active = selectedValue === value;

        return (
          <Box
            key={value}
            sx={{
              // Explicit widths to keep cards uniform and centered
              width: { xs: 130, sm: 135, md: 150 },
              minWidth: { xs: 130, sm: 135, md: 150 },
              flexGrow: 0, // Prevent stretching
              display: "flex", // Ensure child stretches
            }}
          >
            <OptionCard
              label={opt.label}
              subLabel={opt.subLabel}
              icon={
                opt.flag ? (
                  <img
                    src={opt.flag}
                    alt={opt.label}
                    style={{
                      width: 38,
                      height: 26,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                ) : opt.icon
              }
              active={active}
              onClick={() => handleSelect(value)}
            />
          </Box>
        );
      })}
    </Box>
  );
}
