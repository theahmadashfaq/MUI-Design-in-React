import { FiberManualRecord } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Divider, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";

import { List, ListItem,} from "@mui/material";
import { pink, red } from "@mui/material/colors";

const Header = () => {
    return (
        <>
            <Toolbar sx={{ margin: 20, padding: 1,}}>
                <Card sx={{border: 1, borderColor: "white", borderRadius: 5, }}>
                    <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
                    <CardMedia
                            component="img"
                            image="https://t3.ftcdn.net/jpg/07/15/86/22/360_F_715862236_VHJPf0EQsXpxSaoMJKOlkqfDSWlkMTZW.jpg"
                            alt="Omelette"
                            sx={{ width: "100%", borderRadius: 5 }}
                        ></CardMedia>
                    </Box>
                
                    <CardContent>
                        <Typography variant="h3" gutterBottom>Simple Omelette Recipe</Typography>
                        <Typography gutterBottom>An easy and quick dish, perfect fro one meal. This classic omelette combines beaten eggs cooked to perfection, optionaly filled with your choice of cheese, vegetables or meats</Typography>

                    </CardContent>
                    <CardContent sx={{backgroundColor: pink[50], borderRadius: 2, padding: 2, margin: 5}}>
                        <Typography variant="h5" gutterBottom sx={{color: pink[800]}}>
                            Preparation Time
                        </Typography>
                        <List >
                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="Total: Approximately 10 minutes"></ListItemText>

                        </ListItem>

                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="Preparation: 5 minutes"></ListItemText>

                        </ListItem>

                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="Cooking: 5 minutes"></ListItemText>

                        </ListItem>
                        
                        </List>
                    </CardContent>

                    <CardContent>
                    <Typography variant="h5" gutterBottom sx={{color: red[900],  padding: 1}}>
                            Ingredients
                        </Typography>
                        <List>

                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px'}} />
                               <ListItemText primary="2-3 large eggs"></ListItemText>

                        </ListItem>
                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="Salt to taste"></ListItemText>

                        </ListItem>

                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="Pepeer to taste"></ListItemText>

                        </ListItem>
                         
                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="1 tablespoon of butter or oil"></ListItemText>

                        </ListItem>

                        <ListItem>
                               <FiberManualRecord fontSize="small" sx={{ color: red[900],  padding: 2,  width: '10px' }} />
                               <ListItemText primary="Optional filings: cheese, diced vegetables, cooked meats, herbs"></ListItemText>

                        </ListItem>


                           
                        </List>
                    </CardContent>
                    <Divider/>
                    <CardContent>
                    <Typography variant="h5" gutterBottom sx={{color: red[900]}}>
                            Instructions
                        </Typography>
                        <List sx={{ listStyleType: 'number',pl:4  }}>
                            <ListItem sx={{ display: 'list-item' }}>Beats the eggs: In a bowl, beat the eggs with a pich of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>Heat the pan: Place a non stick frying pan over medium heat and butter and oil.</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the egss evenly coat the surface</ListItem>
                            <ListItem sx={{ display: 'list-item' }}>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide into the plate. </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>Enjoy: Serve hot, with additional salt and pepper if needed</ListItem>
                        </List>
                    </CardContent>
                    <Divider/>
                    <CardContent>
                    <Typography variant="h5" gutterBottom sx={{color: red[900]}}> Nutrition</Typography>
                    <Typography>The table below shows nutritional values per serving without the additional fillings.</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple-table">
                            <TableHead>
                                
                                <TableCell>Calories</TableCell>
                                    <TableCell sx={{color: red[900]}}>277kcal</TableCell>
                                    
                                    </TableHead>

                                    <TableHead>
                                    <TableCell>Carbs</TableCell>
                                    <TableCell sx={{color: red[900]}}>0g</TableCell>
                                    </TableHead>
                                    
                                    <TableHead>
                                    <TableCell>Protein</TableCell>
                                    <TableCell sx={{color: red[900]}}>20g</TableCell>
                                    </TableHead> 

                                    <TableHead>
                                    <TableCell>Fat</TableCell>
                                    <TableCell sx={{color: red[900]}}>22g</TableCell>
                                    </TableHead> 
                                    
                        </Table>
                    </TableContainer>
                    </CardContent>
                    
                </Card>
            </Toolbar>
        </>
    );
};

export default Header;
