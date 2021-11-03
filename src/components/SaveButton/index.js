import { useContext, useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";

import Button from "./styles";
import { DataContext } from "../../contexts/DataContext";

function SaveButton({ values, btnName, endPoint, onSaveInput }) {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { setData } = useContext(DataContext);

  async function handleSubmit() {
    setIsSubmiting(true);

    const data = { name: values };

    const res = await setData(data, endPoint);

    if (res) {
      onSaveInput("");
      setIsSubmiting(false);
      setIsSave(true);
    }
  }

  useEffect(() => {
    !values ? setIsDisabled(true) : setIsDisabled(false);
    setIsSave(false);
  }, [values]);

  return (
    <Button
      type="button"
      onClick={() => handleSubmit()}
      className={isSave ? "save" : ""}
      disabled={isDisabled}
    >
      {isSubmiting ? (
        <CircularProgress size={18} sx={{ marginLeft: 1 }} />
      ) : isSave ? (
        "Salvo"
      ) : (
        `${btnName}`
      )}
    </Button>
  );
}

export default SaveButton;
