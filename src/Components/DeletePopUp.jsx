import { useTheme } from "@emotion/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DeletePopUp = ({ title, content, open, setOpen, onClick }) => {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-content"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "white",
          maxWidth: "540px",
          minWidth: "500px",
          maxHeight: "208px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "20px",
          color: theme.palette.secondary.main,
          fontWeight: "bold",
        }}
        id="dialog-title"
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: "16px",
            color: theme.palette.secondary.main,
          }}
          id="dialog-content"
        >
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            color: theme.palette.error.main,
            fontSize: "16px",
            textTransform: "none",
            fontWeight:'400',
          }}
          onClick={() => setOpen(false)}
        >
          Annuler
        </Button>
        <Button
        variant="contained"
          sx={{
            backgroundColor: theme.palette.error[600],
            color: theme.palette.primary.main,
            borderRadius:'4px',
            fontSize: "16px",
            textTransform: "none",
            fontWeight:'400',
            height:'35px',
            ":hover":{
              backgroundColor: theme.palette.error[600],
              color: theme.palette.primary.main,
            }
          }}
          onClick={()=>{
            setOpen(false)
            onClick()
          }}
        >
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopUp;
