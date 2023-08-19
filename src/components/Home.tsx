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
    console.log(formDetails);
    localStorage.setItem("profile", JSON.stringify(formDetails));
    window.location.assign("/page");
  };
  return (
    <>
      {message && (
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
