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
import { ProductContext } from '../context/productContext';
import { useContext } from 'react';
import Link from 'next/link';
import MenuList from './MenuList';

export default function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const { state } = useContext(ProductContext);
    // console.log(state, 'sidebar')
    // console.log(state.data, '2')
    // console.log(state.data.filters, '3')
    // console.log(state.data.filters.categories, '4')
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


            {state &&
                state.data &&
                state.data.filters &&
                state.data.filters.categories &&
                state.data.filters.categories.length > 0 &&
                state.data.filters.categories.map((item) => {
                    // console.log(item, 'filters');
                    return (
                       <MenuList listData={item} />
                    );
                })}
        </List>
    );
}