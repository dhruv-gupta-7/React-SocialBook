import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Image } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import Posts from "./Posts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPosts = () => {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");
  const [postData, setPostData] = useState([
    {
      id: "1",
      caption: "Shree Kedarnath Dham",
      image:
        "https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "02/10/2003",
    },
  ]);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const addPost = () => {
    if (!caption.trim() || !image || !selectedDate) {
      setError("Please fill in all fields.");
      return;
    }

    const newPostData = {
      id: Math.random().toString(),
      caption: caption,
      image: image,
      date: formatDate(selectedDate),
    };

    console.log("New Post Data:", newPostData);

    setPostData((prevPosts) => [newPostData, ...prevPosts]);
    setOpen(false);
    setCaption("");
    setImage("");
    setSelectedDate(null);
    setError("");
  };

  return (
    <>
      {postData.map((post, index) => (
        <div key={post.id}>
          <Posts postData={post} hidden={index !== postData.length + 1} />
        </div>
      ))}

      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={400}
          height={300}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h6"
            style={{ color: "gray", textAlign: "center" }}
          >
            Create Post
          </Typography>
          <TextField
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <input
              type="file"
              id="image-input"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />

            <label htmlFor="image-input">
              <Image color="secondary" />
            </label>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
            />
          </Stack>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ textAlign: "center" }}
            >
              {error}
            </Typography>
          )}

          <ButtonGroup
            fullWidth
            color="primary"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button fullWidth onClick={addPost}>
              Post
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPosts;
