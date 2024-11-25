import { Paper, Typography, useTheme } from "@mui/material";

const NotFoundPage: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          p: 10,
          m: 10,
          color: "white",
          backgroundColor: theme.palette.error.main,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 2,
          }}
        >
          Error 404
        </Typography>
        <Typography variant="body1">
          Invalid URL! No page was found on that place :(
        </Typography>
      </Paper>
    </>
  );
};

export default NotFoundPage;
