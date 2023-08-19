import React, { useState } from "react";
import {
  Checkbox,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { listData, listDataProps } from "../types";
export const Component2 = () => {
  const ListData: listDataProps[] = listData;
  const [open, setOpen] = useState([false, false]);
  const [checked, setChecked] = useState([
    [false, false],
    [false, false, false],
  ]);

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

  const handleSubChange = (index: number, idx: number) => {
    let newArray = checked[index].map((elem, ind) => {
      if (ind === idx) return !elem;
      else return elem;
    });

    let newCheckList = checked.map((item, ind) => {
      if (ind === index) {
        return newArray;
      } else return item;
    });
    setChecked(newCheckList);
  };

  const handleChange1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let checkAll = checked[index].map(() => e.target.checked);
    let newCheckList = checked.map((item, ind) => {
      if (ind === index) {
        return checkAll;
      } else return item;
    });
    setChecked(newCheckList);
  };

  return (
    <div style={{ margin: "auto", marginTop: "20px", width: "330px" }}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {ListData.map((item, index) => (
          <div key={index}>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  value={checked[index].every((elem) => elem === true)}
                  checked={checked[index].every((elem) => elem === true)}
                  onChange={(e) => handleChange1(e, index)}
                />
              </ListItemIcon>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
                onClick={() => handleClick(index)}
              >
                <ListItemText secondary={item.department} />
                <ListItemIcon>
                  {open[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
              </div>
            </ListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              {item.sub_departments.map((department, idx) => (
                <List key={department} component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Checkbox
                        checked={checked[index][idx]}
                        onChange={() => handleSubChange(index, idx)}
                      />
                    </ListItemIcon>
                    <ListItemText secondary={department} />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
};
