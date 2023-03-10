import { Box, IconButton, keyframes, styled } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

export const CustomInner = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  width: "92%",
  padding: "24px",
  background: "#ffffff",
  border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: "24px",
  "&:focus": {
    border: "none",
    outline: "none",
  },
});

export const CustomCancelButton = styled(IconButton)({
  position: "absolute",
  top: "8px",
  right: "8px",
  cursor: "pointer",
});

export const microBorderAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;

  }
  100% {
    opacity: 0;
  }
`;

export const CustomMicroBorder = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "116px",
  height: "116px",
  border: "4px solid #EE4B2B",
  borderRadius: "50%",
  animation: `${microBorderAnimation} 1s ease infinite`,
});

export const CustomIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  background: "#EE4B2B",
  borderRadius: "50%",
});

export const CustomMicIcon = styled(MicIcon)({
  fill: "#fff",
  fontSize: "80px",
});
