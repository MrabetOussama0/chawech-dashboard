import { useTheme } from "@emotion/react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { MenuItem, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";

const CustomDropDown = ({
  value,
  getItems,
  items,
  name,
  sx,
  label,
  iconStyle,
  isDisabled,
  selectPropsStyle,
}) => {
  const theme = useTheme();
  return (
    <Field
      as={TextField}
      disabled={isDisabled}
      select
      name={name}
      helperText={
        <ErrorMessage component="span" className="error-message" name={name} />
      }
      label={label}
      value={value}
      SelectProps={{
        IconComponent: () => (
          <KeyboardArrowDown
            sx={{
              color: theme.palette.grey.main,
              ...iconStyle,
            }}
          />
        ),
        style: {
          color: theme.palette.grey[400],
          height: "37px",
          backgroundColor: isDisabled
            ? theme.palette.grey.light
            : theme.palette.primary.main,
          ...selectPropsStyle,
        },
      }}
      InputLabelProps={{
        style: {
          fontSize: "16px",
          color: theme.palette.grey[400],
        },
      }}
      sx={{
        border: "1px solid",
        borderColor: theme.palette.grey[50],
        borderRadius: "4px",
        width: "100%",
        height: "40px",
        ...sx,
      }}
    >
      {items?.map((item) => (
        <MenuItem
          key={item}
          sx={{
            color: theme.palette.grey.main,
            ":hover": {
              backgroundColor: theme.palette.grey.light,
            },
          }}
          value={item}
        >
          {getItems(item)}
        </MenuItem>
      ))}
    </Field>
  );
};

export default CustomDropDown;
