import { Box, Container, styled } from "@mui/material";

export const PageWrapper = styled(Box)({
  background: "#808080",
});

export const CustomContainer = styled(Container)({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: "12px",
  minHeight: "100vh",
  padding: "12px",
});