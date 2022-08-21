import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const CustomInput = (props) => {
  const { label, inputType, value, name, inputRef, isInvalid, placeHolder } =
    props;

  return (
    <React.Fragment>
      <FormControl isInvalid={isInvalid}>
        <FormLabel>{label}</FormLabel>
        <Input
          type={inputType}
          name={name}
          value={value}
          ref={inputRef}
          placeholder={placeHolder}
        ></Input>
      </FormControl>
    </React.Fragment>
  );
};

export default CustomInput;
