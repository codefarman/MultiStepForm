import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PURPLE, SHADOW_SOFT, SHADOW_MEDIUM } from "../../theme/brand";
import React from "react";

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "customColor",
})(({ active, customColor }) => {
  const activeColor = customColor || PURPLE;

  return {
    width: "100%",
    maxWidth: 135,              // 🧠 Further reduced max width
    minHeight: 100,             // 📱 Very compact height
    padding: "10px 6px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",
    borderRadius: 12,

    border: active ? `2px solid ${activeColor}` : "1px solid #e2e8f0",
    background: active ? `rgba(${hexToRgb(activeColor)}, 0.08)` : "#ffffff",

    boxShadow: active ? SHADOW_MEDIUM : SHADOW_SOFT,
    transition: "all 0.22s ease",

    "&:hover": {
      transform: "translateY(-2px) scale(1.02)",
      borderColor: activeColor,
      boxShadow: SHADOW_MEDIUM,
    },

    // 🖥️ Desktop upscale (still kept compact)
    "@media (min-width: 900px)": {
      minHeight: 120,
      maxWidth: 150,
      padding: "14px 10px",
    },
  };
});

// Helper to convert hex to rgb for opacity handling
const hexToRgb = (hex) => {
  if (!hex) return "124, 58, 237"; // Default Purple RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "124, 58, 237";
};

export default function OptionCard({
  label,
  subLabel,
  icon,
  active,
  onClick,
  color, // New prop
}) {
  const themeColor = color || PURPLE;

  const renderIcon = () => {
    // Flag <img /> or pre-rendered element
    if (React.isValidElement(icon)) return icon;

    // MUI Icon (Function or Object/Memo)
    if (icon && (typeof icon === "function" || typeof icon === "object")) {
      const IconComp = icon;
      return <IconComp sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }} />;
    }

    // Letter fallback
    return label?.charAt(0)?.toUpperCase() || "?";
  };

  return (
    <StyledPaper active={active ? 1 : 0} customColor={color} onClick={onClick}>
      {/* Icon / Flag */}
      <Box
        sx={{
          width: { xs: 44, md: 56 },
          height: { xs: 44, md: 56 },
          borderRadius: "50%",
          // Active: Solid color; Inactive: Very light pastel of that color
          bgcolor: active ? themeColor : `rgba(${hexToRgb(themeColor)}, 0.1)`,
          color: active ? "white" : themeColor,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          mb: { xs: 1, md: 1.6 },
          transition: "all 0.22s ease",
        }}
      >
        {renderIcon()}
      </Box>

      {/* Label */}
      <Typography
        align="center"
        sx={{
          fontWeight: 700,
          color: active ? themeColor : "#1e293b",
          fontSize: { xs: "0.78rem", sm: "0.85rem", md: "0.95rem" },
          lineHeight: 1.25,
          px: 0.8,
        }}
      >
        {label}
      </Typography>

      {/* Sub-label */}
      {subLabel && (
        <Typography
          variant="caption"
          align="center"
          sx={{
            mt: 0.4,
            color: "#64748b",
            fontSize: { xs: "0.62rem", md: "0.72rem" },
            letterSpacing: "0.03em",
          }}
        >
          {subLabel}
        </Typography>
      )}
    </StyledPaper>
  );
}
