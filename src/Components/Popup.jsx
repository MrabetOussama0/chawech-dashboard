import {Dialog, DialogContent} from '@mui/material'

const PopUp = ({children ,open,setOpen,style,sx}) => {
  return (
      <Dialog 
      open={open} 
      PaperProps={{
        style:{maxWidth:'100%',backgroundColor:'transparent',...style}
      }}
      onClose={()=>setOpen && setOpen(false)}
      sx={sx}
      >
        <DialogContent sx={{
          margin:'0',
          padding:'0',
        }} dividers>
          {children}
        </DialogContent>
      </Dialog>
  )
}

export default PopUp