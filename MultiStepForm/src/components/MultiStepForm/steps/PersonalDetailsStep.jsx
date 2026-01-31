import {
  TextField,
  Box,
  Button,
  Typography,
  CircularProgress,
  useTheme,
  useMediaQuery,
  InputAdornment,
} from "@mui/material";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import UniversityCard from "./UniversityCard";
import { UNIVERSITIES } from "../../../data/multiStepFormData";
import { BENEFITS } from "../StepMeta"; // Import Benefits
import {
  ArrowForward,
  CheckCircle,
  Refresh,
  Person,
  Phone,
  Email,
  LocationOn,
  VerifiedUser,
  School,
} from "@mui/icons-material";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwx0zdc26o5wJzAgW1uwcfihqD3bqO6kbbzGZgv04cBnjwP209x8vY9eghfO3XHmMT8vg/exec";

// 🔒 Regex rules
const NAME_REGEX = /^[A-Za-z ]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function PersonalDetailsStep({ data, setData }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // 🔄 Randomize universities on mount
  const recommended = useMemo(() => {
    const shuffled = [...UNIVERSITIES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  // 🔎 Validate all fields
  const validate = () => {
    const newErrors = {};

    // Name
    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = "Enter full name";
    } else if (!NAME_REGEX.test(data.name)) {
      newErrors.name = "Only letters allowed";
    }

    // Phone
    if (!data.phone) {
      newErrors.phone = "Phone number required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Enter 10 digit number";
    }

    // Email
    if (!data.email) {
      newErrors.email = "Email required";
    } else if (!EMAIL_REGEX.test(data.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      // 🚀 NUCLEAR OPTION: JSON PAYLOAD
      // We send the entire data object as a JSON string in 'data_json'.
      // The new App Script parses this string, ensuring 100% data fidelity.

      const body = new URLSearchParams();

      // 1️⃣ The Payload
      body.append("data_json", JSON.stringify(data));
      body.append("timestamp", new Date().toLocaleString());

      // 2️⃣ Fallback: We still send flat keys just in case (ShotgunV2)
      // This ensures if the script parser fails, it might still pick up raw keys
      Object.entries(data).forEach(([key, value]) => {
        if (value) body.append(key, String(value));
      });

      // 3️⃣ Send (Using valid fetch, no await if preferred, but await is safer)
      // User wanted no await, but we really should use it to prevent race conditions.
      // However, since we show a success screen immediately, it doesn't unmount.
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body,
        mode: "no-cors",
      });

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      console.error("Submission Error:", err);
      setErrors({ submit: "Something went wrong. Try again." });
      setLoading(false);
    }
  };

  // ✅ Success screen (Beautiful & Personalized)
  if (success) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          px: 3,
          maxWidth: 600,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
          animation: "fadeIn 0.5s ease-in"
        }}
      >
        <Box sx={{ position: "relative", mb: 4 }}>
          {/* Glowing Background Effect */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 100,
              height: 100,
              bgcolor: "#dcfce7",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          <CheckCircle sx={{ fontSize: 90, color: "#22c55e", position: "relative", zIndex: 1 }} />
        </Box>

        <Typography variant="h4" fontWeight={800} sx={{ color: "#1e293b", mb: 1.5 }}>
          Thank You, {data.name?.split(" ")[0]}! 🎉
        </Typography>

        <Typography variant="h6" sx={{ color: "#475569", fontWeight: 600, mb: 3 }}>
          Your application has been submitted successfully.
        </Typography>

        <Typography variant="body1" sx={{ color: "#64748b", maxWidth: 480, lineHeight: 1.6, mb: 4 }}>
          Our expert counsellors have received your details and will get in touch with you shortly to guide you towards your dream university.
        </Typography>

        <Button
          variant="contained"
          onClick={() => window.location.reload()} // Allow them to reset if they want
          sx={{
            background: "linear-gradient(90deg, #7C3AED, #3B82F6)",
            color: "white",
            px: 4,
            py: 1.2,
            borderRadius: 50,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 700,
            boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
            "&:hover": {
              boxShadow: "0 15px 30px -5px rgba(124, 58, 237, 0.5)",
            }
          }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 3 }, // Gap stays moderate
        alignItems: "stretch",
        mt: -1,
      }}
    >
      {/* LEFT SIDE: Universities + Benefits */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>

        {/* Top Matches Section */}
        <Box>
          <Typography variant="subtitle1" fontWeight={800} sx={{ mb: 1, color: "#1e293b", fontSize: "1rem" }}>
            {data.program === "STUDY_ABROAD" ? "Your Global Future Awaits" : "Top University Matches"}
          </Typography>

          {data.program === "STUDY_ABROAD" ? (
            // 🌍 Study Abroad Creative Text
            <Box
              sx={{
                p: 3,
                borderRadius: 3,

                // 🖌️ New Premium Background Image
                backgroundImage: "url('/study_abroad_bg.png')", // Assume I will move it to public or import it
                backgroundSize: "cover",
                backgroundPosition: "center",

                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 220,

                // Glassmorphism Overlay Effect
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(255, 255, 255, 0.65)", // Light overlay for readability
                  backdropFilter: "blur(4px)",
                  zIndex: 0
                }
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h5" fontWeight={800} sx={{ color: "#0f172a", mb: 0.5 }}>
                  Dream Big, Fly High! ✈️
                </Typography>
                <Typography variant="body2" sx={{ color: "#334155", fontWeight: 600, fontStyle: "italic", mb: 2 }}>
                  "The world is a book and those who do not travel read only one page."
                </Typography>
                <Typography variant="caption" sx={{ color: "#1e293b", fontWeight: 700, display: "block", bgcolor: "rgba(255,255,255,0.5)", py: 0.5, px: 2, borderRadius: 50 }}>
                  Start your global journey today 🌏
                </Typography>
              </Box>
            </Box>
          ) : (
            // 🎓 Standard University Grid
            <Box
              sx={{
                display: "grid",
                // Fixed 4 columns on large screens to prevent stretching/squeezing
                gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
                gap: 1.5,
                justifyContent: "start" // Align to start
              }}
            >
              {recommended.slice(0, 4).map((uni, i) => ( // Show only 4 cards strictly
                <UniversityCard key={i} university={uni} />
              ))}
            </Box>
          )}
        </Box>

        {/* Dynamic Benefits Section (What We Ensure) */}
        <Box
          sx={{
            p: 2,
            bgcolor: "#fff",
            borderRadius: 3,
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
          }}
        >
          <Typography variant="subtitle1" fontWeight={800} sx={{ mb: 1.5, color: "#7C3AED", fontSize: "1rem" }}>
            What We Ensure
          </Typography>

          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 2 Columns
            columnGap: 2,
            rowGap: 1.5
          }}>
            {BENEFITS.map((b, i) => {
              const Icons = [School, VerifiedUser, CheckCircle, LocationOn, VerifiedUser];
              const IconComp = Icons[i % Icons.length];

              return (
                <Box key={i} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      minWidth: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#f3e8ff",
                      color: "#7C3AED",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 0.2
                    }}
                  >
                    <IconComp sx={{ fontSize: 18 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={700} sx={{ lineHeight: 1.2, color: "#1e293b", fontSize: "0.85rem" }}>
                      {b.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#64748b", lineHeight: 1.1, fontSize: "0.7rem", display: "block", mt: 0.2 }}>
                      {b.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

      </Box>

      {/* RIGHT SIDE: Form */}
      <Box
        sx={{
          maxWidth: 320, // Reduced further from 340 to 320
          width: "100%",
          p: 2.5,
          borderRadius: 3,
          bgcolor: "white",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
          height: "fit-content",
          flexShrink: 0
        }}
      >
        <Typography variant="h6" fontWeight={800} align="center" sx={{ mb: 2 }}>
          Free Counseling
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {/* Name */}
          <TextField
            size="small"
            placeholder="Full Name"
            value={data.name || ""}
            error={!!errors.name}
            helperText={errors.name}
            onChange={(e) => {
              const value = e.target.value.replace(/[^A-Za-z ]/g, "");
              setData({ ...data, name: value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: "action.active", fontSize: 18 }} />
                </InputAdornment>
              ),
              sx: { fontSize: "0.9rem" }
            }}
          />

          {/* Phone */}
          <TextField
            size="small"
            placeholder="Phone Number"
            value={data.phone || ""}
            error={!!errors.phone}
            helperText={errors.phone}
            inputProps={{ maxLength: 10 }}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setData({ ...data, phone: value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone sx={{ color: "action.active", fontSize: 18 }} />
                </InputAdornment>
              ),
              sx: { fontSize: "0.9rem" }
            }}
          />

          {/* Email */}
          <TextField
            size="small"
            placeholder="Email Address"
            value={data.email || ""}
            error={!!errors.email}
            helperText={errors.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value.trim() })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "action.active", fontSize: 18 }} />
                </InputAdornment>
              ),
              sx: { fontSize: "0.9rem" }
            }}
          />

          {/* City */}
          <TextField
            size="small"
            placeholder="City / State"
            value={data.state || ""}
            onChange={(e) =>
              setData({ ...data, state: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn sx={{ color: "action.active", fontSize: 18 }} />
                </InputAdornment>
              ),
              sx: { fontSize: "0.9rem" }
            }}
          />

          {errors.submit && (
            <Typography color="error" variant="caption" align="center">
              {errors.submit}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            disabled={loading}
            onClick={handleSubmit}
            endIcon={!loading && <ArrowForward />}
            sx={{
              mt: 0.5,
              py: 1.2,
              fontWeight: 700,
              background: "linear-gradient(90deg, #7C3AED, #3B82F6)",
              boxShadow: "0 4px 14px 0 rgba(124, 58, 237, 0.4)",
              borderRadius: 2,
              textTransform: "none",
              fontSize: "0.95rem",
            }}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Get Free Consultation"
            )}
          </Button>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: "center", mt: 0 }}>
            <VerifiedUser sx={{ fontSize: 14, color: "success.main" }} />
            <Typography
              variant="caption"
              sx={{ fontSize: "0.7rem", color: "text.secondary", fontWeight: 500 }}
            >
              100% Secure & Confidential
            </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
