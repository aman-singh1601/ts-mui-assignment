import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { listData, listDataProps } from "../types";
export const Component2 = () => {
  const ListData: listDataProps[] = listData;
  const [open, setOpen] = useState([false, false]);
  const handleClick = (index: number) => {
    let newArr = open.map((elem, ind) => {
      if (ind === index) {
        return !elem;
      } else {
        return elem;
      }
    });
    setOpen(newArr);
  };

  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        {ListData.map((item, index) => (
          <>
            <ListItemButton key={index} onClick={() => handleClick(index)}>
              <ListItemText secondary={item.department} />
              <ListItemIcon>
                {open[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              {item.sub_departments.map((department) => (
                <List key={department} component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText secondary={department} />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          </>
        ))}
      </List>
    </div>
  );
};
