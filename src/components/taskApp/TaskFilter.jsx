import { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function TaskFilter({ filterTasks }) {
  const [activeFilter, setActiveFilter] = useState("all");

  function filterBy(e) {
    setActiveFilter(() => e.target.innerText.toLowerCase());
    filterTasks(e.target.innerText.toLowerCase());
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      className="task-filter"
    >
      <Typography variant="h6" component="div">
        Filter By:
      </Typography>
      <List className="task-filter-types" disablePadding dense>
        <ListItem
          onClick={filterBy}
          className={
            activeFilter === "high-priority" ? activeFilter : undefined
          }
        >
          <ListItemText>High-Priority</ListItemText>
        </ListItem>
        <ListItem
          onClick={filterBy}
          className={activeFilter === "incomplete" ? activeFilter : undefined}
        >
          <ListItemText>Incomplete</ListItemText>
        </ListItem>
        <ListItem
          onClick={filterBy}
          className={activeFilter === "complete" ? activeFilter : undefined}
        >
          <ListItemText>Complete</ListItemText>
        </ListItem>
        <ListItem
          onClick={filterBy}
          className={activeFilter === "all" ? activeFilter : undefined}
        >
          <ListItemText>All</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
