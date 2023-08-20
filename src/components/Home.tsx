import React, { useState } from "react";
import {
  Input,
  Typography,
  Snackbar,
  Container,
  Button,
  Alert,
} from "@mui/material";
import "./home.css";

interface formProps {
  name: string;
  email: string;
  number: string;
}
export const Home = ({ message }: { message: boolean }) => {
  const [fillDetails, setFillDetails] = useState(false);
  const [open, setOpen] = useState(true);
  const [formDetails, setFormDetails] = useState<formProps>({
    name: "",
    email: "",
    number: "",
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    event?.preventDefault();
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const submit = () => {
    if (
      formDetails.name === "" ||
      formDetails.number === "" ||
      formDetails.email === ""
    ) {
      setFillDetails(true);
      return;
    } else {
      setFillDetails(false);
      localStorage.setItem("profile", JSON.stringify(formDetails));
      window.location.assign("/page");
    }
  };
  return (
    <>
      {(message || fillDetails) && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={(event) => handleClose(event)}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Please enter user details!
          </Alert>
        </Snackbar>
      )}
      <div className="home">
        <Container maxWidth="sm" className="form">
          <div className="insideHome">
            <Typography variant="h6">Name</Typography>
            <Input
              type="text"
              name="name"
              required
              value={formDetails.name}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="insideHome">
            <Typography variant="h6">Number</Typography>
            <Input
              type="number"
              name="number"
              required
              value={formDetails.number}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  number: e.target.value,
                })
              }
            />
          </div>
          <div className="insideHome">
            <Typography variant="h6">Email</Typography>
            <Input
              type="email"
              name="email"
              value={formDetails.email}
              required
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  email: e.target.value,
                })
              }
            />
          </div>
        </Container>
        <div>
          <Typography variant="h5" className="content" paragraph>
            Complete the form to proceed to the next page
          </Typography>
          <Button variant="contained" onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
