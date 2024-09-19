import {
  CircularProgress,
  Dialog,
  DialogTitle,
  Typography,
} from "@mui/material";

const LoadingOverlay = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
        id="dialog-title"
      >
        <Typography>S'il vous plaît, attendez ...</Typography>
        <CircularProgress size="30px" sx={{ color: "black" }} />
      </DialogTitle>
    </Dialog>
  );
};

export default LoadingOverlay;
