import {
  Add,
  DateRange,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Tooltip,
  Fab,
  Box,
  Button,
  Modal,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottum: "20px",
});

function AddPost() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: 5, md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={(e) => setOpen(true)}>
          <Add />
        </Fab>
      </Tooltip>
      <div>
        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={280}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" textAlign="center">
              Create Post
            </Typography>
            <UserBox>
              <Avatar src="https://images.pexels.com/photos/13912832/pexels-photo-13912832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Typography fontWeight={500}>John Doe</Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%", mt: "5px" }}
              id="standard-multiline-static"
              multiline
              rows={4}
              placeholder="What's on your mind?"
              variant="standard"
            ></TextField>
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <ImageIcon color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </div>
    </>
  );
}

export default AddPost;
