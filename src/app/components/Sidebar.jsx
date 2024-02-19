'use client'
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Link from 'next/link';
import MenuList from './MenuList';
import { useContext } from "react";
import { useEffect } from "react";
import { loadData } from '../services/api';
// import { loadData } from "./services/api";

export default function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const [filters, setFilter] = React.useState([]);
    
  const handleData = async () => {
    const result = await loadData('https://myshopprime.com/api/zoomi/shop/listing?type=shop&sortBy=recency&pageNo=1&token=mdlhx2p');
  setFilter(result.filters.categories)
  }
  useEffect(() => {
    handleData()
  },[])
  const handleClick = () => {
    setOpen(!open);
};

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                   Categories
                </ListSubheader>
            }
        >


            {
                filters.length > 0 &&
                filters.map((item) => {
                    // console.log(item, 'filters');
                    return (
                       <MenuList listData={item} />
                    );
                })}
        </List>
    );
}