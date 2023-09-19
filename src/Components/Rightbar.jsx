import {
  Avatar,
  ImageList,
  ImageListItem,
  List,
  Typography,
} from "@material-ui/core";
import { AvatarGroup, Box } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import "./Rightbar.css";

const Rightbar = () => {
  return (
    <Box
      id="rightbar"
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        position: "fixed",
        width: "100%",
        height: "100%",
        marginLeft: "72%",
      }}
    >
      <div className="rightBar">
        <Box position={"fixed"} width={320} overflow="hidden">
          <h3 style={{ fontWeight: 100, color: "gray" }}>Online Friends</h3>
          <Box marginRight={7.7}>
            <AvatarGroup max={7}>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://material-ui.com/static/images/avatar/4.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/5.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/6.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/7.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/8.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/9.jpg"
              />
            </AvatarGroup>
          </Box>
          <Box marginTop={2}>
            <Typography
              variant="h6"
              fontWeight={100}
              margin={5}
              style={{ color: "gray" }}
            >
              Latest Photos
            </Typography>
            <ImageList cols={3} rowHeight={80} margin={1}>
              <ImageListItem>
                <img src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt=''/>
              </ImageListItem>
              <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt=''/>
              </ImageListItem>
            </ImageList>
          </Box>
          <Box marginTop={2}>
            <Typography variant="h6" fontWeight={100} style={{ color: "gray" }}>
              Latest Conversations
            </Typography>
          </Box>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/4.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </div>
    </Box>
  );
};

export default Rightbar;
