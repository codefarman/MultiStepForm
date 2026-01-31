import { Box, Paper, Typography } from "@mui/material";

export default function UniversityCard({ university, selected = false, onSelect = () => { } }) {
  return (
    <Paper
      elevation={selected ? 4 : 1}
      onClick={onSelect}
      sx={{
        width: { xs: 110, sm: 120, md: 130 }, // Significantly reduced width
        height: { xs: 100, sm: 105, md: 115 }, // Significantly reduced height
        borderRadius: 2,
        border: selected ? "2px solid #7C3AED" : "1px solid #e2e8f0",
        bgcolor: selected ? "#f5f3ff" : "white",
        transition: "all 0.2s ease",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        p: 0.6, // Minimal padding
        "&:hover": {
          borderColor: "#7C3AED",
          transform: "translateY(-3px)",
          boxShadow: "0 6px 16px rgba(124,58,237,0.15)",
        },
      }}
    >
      {/* Logo area – small & fixed height */}
      <Box
        sx={{
          height: { xs: 34, sm: 38, md: 40 },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 0.5,
          bgcolor: "white",
          borderRadius: 1.5,
        }}
      >
        <img
          src={university.logo}
          alt={university.name}
          style={{
            maxHeight: "100%",
            maxWidth: "90%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Name – forced single line + ellipsis */}
      <Typography
        variant="subtitle2"
        noWrap
        sx={{
          fontWeight: 700,
          fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
          lineHeight: 1.2,
          textAlign: "center",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "#1e293b",
          px: 0.25,
        }}
      >
        {university.name}
      </Typography>

      {/* EMI – small */}
      <Typography
        variant="caption"
        sx={{
          mt: 0.2, // Tighter
          color: "#7C3AED",
          fontWeight: 700,
          fontSize: { xs: "0.6rem", sm: "0.65rem", md: "0.7rem" },
        }}
      >
        {university.emi}/mo
      </Typography>
    </Paper>
  );
}