import { useTheme } from "@emotion/react";
import { Box, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

const CustomField = ({
  sx,
  label,
  name,
  value,
  type,
  title,
  isDisabled,
  rows,
  titleStyle,
  fieldStyle,
  as = TextField,
  InputProps,
  placeholder,
  multiline = false,
}) => {
  const theme = useTheme();
  return (
    <Box
      m="1rem 0"
      sx={{
        "span.error-message": {
          m: "-3px -10px",
          fontSize: "12px",
          color: theme.palette.error.main,
          position: "absolute",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        },
        ".MuiFormControl-root": {
          borderRadius: "4px",
        },
        ...sx,
      }}
    >
      <Typography
        height="15px"
        variant="h6"
        color={isDisabled ? theme.palette.grey.light : theme.palette.grey[600]}
        mb=".6rem"
        sx={{ ...titleStyle }}
      >
        {title}
      </Typography>
      <Field
        disabled={isDisabled}
        id={name}
        as={as}
        rows={rows}
        autoComplete={"off"}
        multiline={multiline}
        value={value}
        name={name}
        type={type}
        placeholder={label || placeholder}
        helperText={
          <ErrorMessage
            component="span"
            className="error-message"
            name={name}
          />
        }
        sx={{
          width: "100%",
          backgroundColor: isDisabled
            ? theme.palette.grey.light
            : theme.palette.primary.main,
          border: "1px solid",
          borderColor: theme.palette.grey[200],
          height: !rows && "40px",
          ...fieldStyle,
        }}
        InputProps={{
          id: name,
          style: {
            height: rows ? "" : "37px",
            color: theme.palette.grey[400],
            fontSize: "14px",
            borderBottom: "none",
            border: "none",
          },
          ...InputProps,
        }}
        InputLabelProps={{
          style: {
            color: theme.palette.grey[400],
            margin: "-4px",
          },
        }}
      />
    </Box>
  );
};

export default CustomField;
