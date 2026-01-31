import {
  RED,
  PURPLE,
  SHADOW_SOFT,
  SHADOW_MEDIUM,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  BG_WHITE,
} from "./brand";
import { GRADIENT_PRIMARY, GRADIENT_BORDER } from "./gradient";

/* TYPOGRAPHY */

export const sectionTitle = {
  fontWeight: 900,
  textAlign: "center",
  background: GRADIENT_PRIMARY,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const sectionSubtitle = {
  textAlign: "center",
  color: TEXT_SECONDARY,
  maxWidth: 720,
  mx: "auto",
};

/* ------------------ CARDS ------------------ */

export const cardBase = {
  borderRadius: 3,
  backgroundColor: BG_WHITE,
  boxShadow: SHADOW_SOFT,
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
};

export const cardHoverLift = {
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: SHADOW_MEDIUM,
  },
};

export const gradientBorderCard = {
  ...cardBase,
  border: "2px solid transparent",
  background: GRADIENT_BORDER,
};

/* ------------------ BUTTONS ------------------ */

export const buttonPrimary = {
  borderRadius: 50,
  fontWeight: 700,
  textTransform: "none",
  background: GRADIENT_PRIMARY,
  color: "#fff",
  // boxShadow: SHADOW_MEDIUM,
  "&:hover": {
    opacity: 0.95,
    boxShadow: SHADOW_MEDIUM,
  },
};

export const buttonOutlinedLight = {
  borderRadius: 50,
  fontWeight: 600,
  textTransform: "none",
  color: PURPLE,
  borderColor: PURPLE,
  "&:hover": {
    borderColor: PURPLE,
    backgroundColor: "rgba(88,41,167,0.05)",
  },
};

/* ------------------ ICON WRAPPERS ------------------ */

export const iconCircle = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: GRADIENT_PRIMARY,
  color: "#fff",
};

/* ------------------ LIST / ROW ------------------ */

export const flexBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

/* ------------------ UTIL ------------------ */

export const hideScrollbarX = {
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};
