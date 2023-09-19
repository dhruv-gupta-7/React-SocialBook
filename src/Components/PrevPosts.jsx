import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { MoreVert as MoreVertIcon, Rowing } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Checkbox } from "@material-ui/core";
import {
  BorderAll,
  ExpandMore,
  Favorite,
  FavoriteBorder,
} from "@material-ui/icons";

const PrevPosts = () => {
  return (
    <Box
      sx={{
        position: "static",
        bottom: 20,
        top: 10,
        left: "-12%",
        width: 900,
        height: 100,
      }}
    >
      <Card style={{ marginBottom: 20 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Kedarnath Dham"
          subheader="07 May 2022"
        />
        <CardMedia
          component="img"
          width={400}
          height={400}
          image="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </Box>
  );
};

export default PrevPosts;
