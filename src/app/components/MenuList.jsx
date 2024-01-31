
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
export default function MenuList({ listData }) {
    const [open, setOpen] = React.useState(false);
    // console.log({ listData });
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            {
                listData.child && listData.child.length > 0 ?
                    <>
                        <ListItemButton onClick={handleClick}>
                            <Link className='menu-link' href={`/category/${listData.categorySlug}`}><ListItemText primary={listData.categoryName} /></Link>

                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    listData.child.map((childItem) => {
                                        return (
                                            <Link className='menu-link' href={`/category/${childItem.categorySlug}`}>
                                                <ListItemButton sx={{ pl: 4 }} key={childItem.id}>
                                                    <ListItemText primary={childItem.categoryName} />
                                                </ListItemButton>
                                            </Link>

                                        )
                                    })
                                }

                            </List>
                        </Collapse>
                    </>
                    :
                    <ListItemButton sx={{ pl: 4 }} key={listData.categoryId}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={listData.categoryName} />
                    </ListItemButton>

            }


        </>
    )
}
