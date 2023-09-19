import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid';
import { Avatar } from "@mui/material";

const Posts = ({ postData, hidden }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (postData) {
      setPosts((prevPosts) => [
        { id: uuidv4(), ...postData },
        ...prevPosts,
      ]);
    }
  }, [postData]);

  if (!hidden) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        
      }}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            marginBottom: 2,
            width: "100%",
            maxWidth: "38.5rem",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.caption}
            subheader={post.date}
          />
          <CardMedia
            component="img"
            style={{
              height: `calc(100% - 150px)`, 
              width: "100%",
              objectFit: "contain",
            }}
            image={post.image}
            alt="Post's Image"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Posts;
