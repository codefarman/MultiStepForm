import { RED, PURPLE } from "./brand";

export const GRADIENT_PRIMARY = `linear-gradient(135deg, ${RED} 0%, ${PURPLE} 100%)`;

export const GRADIENT_SOFT = `linear-gradient(
  135deg,
  rgba(227, 30, 36, 0.08),
  rgba(88, 41, 167, 0.08)
)`;

export const GRADIENT_BORDER = `linear-gradient(#fff, #fff) padding-box, ${GRADIENT_PRIMARY} border-box`;
