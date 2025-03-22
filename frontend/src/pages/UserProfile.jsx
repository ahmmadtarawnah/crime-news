import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Divider,
  Badge,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Bloodtype as BloodIcon,
  History as HistoryIcon,
  BookmarkAdded as BookmarkIcon,
  Comment as CommentIcon,
  Fingerprint as FingerprintIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

// CRIMEGAZETTE THEME
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#61090b" },
    secondary: { main: "#ab0000" },
    background: {
      default: "#0a0000",
      paper: "#150404",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffcccc",
    },
    error: { main: "#ff2b2b" },
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
    h3: {
      letterSpacing: "0.05em",
      fontWeight: 700,
    },
    h4: {
      letterSpacing: "0.03em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

// STYLED COMPONENTS
const ProfileCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1a0507",
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: "0 4px 20px rgba(97, 9, 11, 0.4)",
}));

const BloodAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: `3px solid ${theme.palette.primary.main}`,
  backgroundColor: "#300000",
  boxShadow: "0 0 15px rgba(171, 0, 0, 0.7)",
}));

const BloodButton = styled(Button)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.primary.dark}`,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontWeight: "bold",
  padding: "8px 16px",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, rgba(97, 9, 11, 0.4), transparent)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover:before": {
    opacity: 1,
  },
}));

const CrimeTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontWeight: "bold",
  fontSize: "0.85rem",
  "&.Mui-selected": {
    color: theme.palette.text.primary,
  },
}));

const ContentPanel = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1d0608",
  border: `1px solid ${theme.palette.primary.dark}`,
  boxShadow: "inset 0 0 10px rgba(97, 9, 11, 0.3)",
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const CrimeListItem = styled(ListItem)(({ theme }) => ({
  borderBottom: "1px solid rgba(97, 9, 11, 0.5)",
  position: "relative",
  "&:hover": {
    backgroundColor: "rgba(97, 9, 11, 0.1)",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "3px",
    backgroundColor: theme.palette.primary.main,
    transform: "scaleY(0)",
    transition: "transform 0.2s ease",
  },
  "&:hover:before": {
    transform: "scaleY(1)",
  },
}));

const CrimeTitleText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 600,
}));

const dateFormatter = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // GET user profile
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          withCredentials: true,
        }
      );
      console.log("✅ User profile fetched:", response.data);
      setUser(response.data.user);
    } catch (error) {
      console.error(
        "❌ Error fetching profile:",
        error.response?.data || error.message
      );
    }
  };

  // EDIT user
  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:5000/api/users/profile", editedUser, {
        withCredentials: true,
      });
      setUser({ ...user, ...editedUser });
      setIsEditing(false);
    } catch (error) {
      console.error(
        "❌ Error updating profile:",
        error.response?.data || error.message
      );
    }
  };

  if (!user) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0000",
        }}
      >
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <Typography variant="h5" sx={{ color: "#61090b" }}>
            Loading Profile Data...
          </Typography>
        </motion.div>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          pt: 3,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ mb: 5, textAlign: "center" }}>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  textTransform: "uppercase",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                }}
              >
                <BloodIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                CRIMEGAZETTE
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mt: 1 }}>
                CASE FILE: {user.username.toUpperCase()}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* LEFT SIDE (Profile Card) */}
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ProfileCard>
                    <CardHeader
                      avatar={
                        <Badge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          badgeContent={
                            <FingerprintIcon
                              sx={{ color: theme.palette.primary.main }}
                            />
                          }
                        >
                          <BloodAvatar
                            src={user.profilePicture}
                            alt={user.username}
                          >
                            {!user.profilePicture &&
                              user.username.charAt(0).toUpperCase()}
                          </BloodAvatar>
                        </Badge>
                      }
                      title={
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="h4" sx={{ color: "#ffffff" }}>
                            {user.username}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: theme.palette.primary.main,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {user.role || "Criminal Enthusiast"}
                          </Typography>
                        </Box>
                      }
                    />
                    <CardContent>
                      <Divider
                        sx={{ mb: 3, borderColor: "rgba(97, 9, 11, 0.5)" }}
                      />

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{ color: "#ffcccc" }}>
                          <strong>CASE ID:</strong> #
                          {user._id?.slice(-6) || "unknown"}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mt: 1, color: "#ffcccc" }}
                        >
                          <strong>CONTACT:</strong> {user.email}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mt: 1, color: "#ffcccc" }}
                        >
                          <strong>STATUS:</strong> Active
                        </Typography>
                      </Box>

                      <Box sx={{ mt: 4 }}>
                        <BloodButton
                          startIcon={<EditIcon />}
                          onClick={handleEdit}
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Edit Case File
                        </BloodButton>
                      </Box>
                    </CardContent>
                  </ProfileCard>
                </motion.div>
              </Grid>

              {/* RIGHT SIDE (Tabs) */}
              <Grid item xs={12} md={8}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Paper
                    sx={{
                      backgroundColor: "#0e0000",
                      border: `1px solid ${theme.palette.primary.main}`,
                      mb: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Tabs
                      value={tabValue}
                      onChange={(e, newValue) => setTabValue(newValue)}
                      variant="fullWidth"
                      TabIndicatorProps={{
                        style: {
                          backgroundColor: theme.palette.primary.main,
                          height: 3,
                        },
                      }}
                      sx={{
                        "& .MuiTabs-flexContainer": {
                          borderBottom: "1px solid rgba(97, 9, 11, 0.5)",
                        },
                      }}
                    >
                      <CrimeTab
                        icon={<BookmarkIcon sx={{ mb: 0.5 }} />}
                        label="Case Files"
                      />
                      <CrimeTab
                        icon={<HistoryIcon sx={{ mb: 0.5 }} />}
                        label="Recent Activity"
                      />
                      <CrimeTab
                        icon={<CommentIcon sx={{ mb: 0.5 }} />}
                        label="Statements"
                      />
                    </Tabs>

                    <ContentPanel>
                      {/* TAB #0 - SAVED ARTICLES */}
                      {tabValue === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              borderBottom: "2px solid #61090b",
                              pb: 1,
                            }}
                          >
                            SAVED CASE FILES
                          </Typography>

                          {Array.isArray(user.savedArticles) &&
                          user.savedArticles.length > 0 ? (
                            <List disablePadding>
                              {user.savedArticles.map((article) => (
                                <CrimeListItem key={article._id} disablePadding>
                                  <ListItemText
                                    primary={
                                      <CrimeTitleText>
                                        {article.title}
                                      </CrimeTitleText>
                                    }
                                    secondary={
                                      <Typography
                                        variant="body2"
                                        sx={{ color: "rgba(255,255,255,0.7)" }}
                                      >
                                        By {article.author || "Anonymous"} •
                                        Case #
                                        {article._id?.slice(-6) || "unknown"}
                                      </Typography>
                                    }
                                    sx={{ py: 1.5 }}
                                  />
                                  <IconButton
                                    onClick={() =>
                                      console.log("Remove article", article._id)
                                    }
                                    size="small"
                                    sx={{ color: theme.palette.error.main }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </CrimeListItem>
                              ))}
                            </List>
                          ) : (
                            <Box sx={{ py: 3, textAlign: "center" }}>
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                No case files found.
                              </Typography>
                            </Box>
                          )}
                        </motion.div>
                      )}

                      {/* TAB #1 - READING HISTORY */}
                      {tabValue === 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              borderBottom: "2px solid #61090b",
                              pb: 1,
                            }}
                          >
                            RECENT ACTIVITY
                          </Typography>

                          {Array.isArray(user.readingHistory) &&
                          user.readingHistory.length > 0 ? (
                            <List disablePadding>
                              {user.readingHistory.map((historyItem) => (
                                <CrimeListItem
                                  key={historyItem._id}
                                  disablePadding
                                >
                                  <ListItemText
                                    primary={
                                      <CrimeTitleText>
                                        {historyItem.title}
                                      </CrimeTitleText>
                                    }
                                    secondary={
                                      <Typography
                                        variant="body2"
                                        sx={{ color: "rgba(255,255,255,0.7)" }}
                                      >
                                        {historyItem.author || "No Author"} •
                                        Accessed on{" "}
                                        {dateFormatter(historyItem.date)}
                                      </Typography>
                                    }
                                    sx={{ py: 1.5 }}
                                  />
                                  <IconButton
                                    onClick={() =>
                                      console.log(
                                        "Remove from history",
                                        historyItem._id
                                      )
                                    }
                                    size="small"
                                    sx={{ color: theme.palette.error.main }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </CrimeListItem>
                              ))}
                            </List>
                          ) : (
                            <Box sx={{ py: 3, textAlign: "center" }}>
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                No recent activity logged.
                              </Typography>
                            </Box>
                          )}
                        </motion.div>
                      )}

                      {/* TAB #2 - COMMENTS */}
                      {tabValue === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              borderBottom: "2px solid #61090b",
                              pb: 1,
                            }}
                          >
                            STATEMENTS
                          </Typography>

                          {Array.isArray(user.comments) &&
                          user.comments.length > 0 ? (
                            <List disablePadding>
                              {user.comments.map((comm) => (
                                <CrimeListItem key={comm._id} disablePadding>
                                  <ListItemText
                                    primary={
                                      <CrimeTitleText>
                                        {comm.text}
                                      </CrimeTitleText>
                                    }
                                    secondary={
                                      <Typography
                                        variant="body2"
                                        sx={{ color: "rgba(255,255,255,0.7)" }}
                                      >
                                        Posted on{" "}
                                        {dateFormatter(comm.createdAt)}
                                      </Typography>
                                    }
                                    sx={{ py: 1.5 }}
                                  />
                                  <IconButton
                                    onClick={() =>
                                      console.log("Remove comment", comm._id)
                                    }
                                    size="small"
                                    sx={{ color: theme.palette.error.main }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </CrimeListItem>
                              ))}
                            </List>
                          ) : (
                            <Box sx={{ py: 3, textAlign: "center" }}>
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                No statements recorded.
                              </Typography>
                            </Box>
                          )}
                        </motion.div>
                      )}
                    </ContentPanel>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        {/* EDIT PROFILE DIALOG */}
        <Dialog open={isEditing} onClose={handleCancel} maxWidth="sm" fullWidth>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>
            <TextField
              name="username"
              label="Username"
              value={editedUser.username || user.username}
              onChange={(e) =>
                setEditedUser({ ...editedUser, username: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={editedUser.email || user.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default UserProfile;
