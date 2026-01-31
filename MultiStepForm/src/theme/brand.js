export const RED = "#E31E24";
export const PURPLE = "#5829A7";
export const GRADIENT = `linear-gradient(135deg, ${RED} 0%, ${PURPLE} 100%)`;

export const GRADIENT_LIGHT = `linear-gradient(135deg, ${RED}15, ${PURPLE}15)`;

export const SHADOW_SOFT =
  "0px 8px 24px rgba(0, 0, 0, 0.08)";

export const SHADOW_MEDIUM =
  "0px 12px 32px rgba(88, 41, 167, 0.25)";

export const TEXT_PRIMARY = "#1A1A1A";
export const TEXT_SECONDARY = "#5F6368";

export const BG_LIGHT = "#F9FAFC";
export const BG_WHITE = "#FFFFFF";

export const CTA_PRIMARY = {
  background: GRADIENT,
  color: "#FFFFFF",
  borderRadius: 50,
  textTransform: "none",
  fontWeight: 600,
  px: 4,
  py: 1.2,
  boxShadow: SHADOW_MEDIUM,
  "&:hover": {
    opacity: 0.95,
    boxShadow: SHADOW_MEDIUM,
  },
};
export const CTA_PRIMARY1 = {
  background: RED,
  color: "#FFFFFF",
  borderRadius: 50,
  textTransform: "none",
  fontWeight: 600,
  px: 4,
  py: 1.2,
  boxShadow: SHADOW_MEDIUM,
  "&:hover": {
    opacity: 0.95,
    boxShadow: SHADOW_MEDIUM,
  },
};
