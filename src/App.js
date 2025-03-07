<<<<<<< HEAD
import './App.css';
import {Container } from '@mui/material';
import Header from './components/header';
import Preparation from './components/preparation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Header/>
        <Preparation/>
      </Container>
      
      </header>
    </div>
  );
}

export default App;
=======
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Avatar } from '@mui/material';


const App = () => {
  return (
    <Box sx={{ padding:10, backgroundColor: '#F3F4F6', height: '100vh', }}>
      <Grid container spacing={3} width="1100px" marginLeft={40}>
        <Grid container item xs={12} md={9} spacing={4} >

          <Grid item xs={12} md={8}>
            <Card sx={{backgroundColor: 'rgb(129, 82, 210)', boxShadow:10, color: 'white', borderRadius: 3, height: '100%', position: 'relative', 
            }}>
             

              <CardContent sx={{  padding: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykxfIcrh2AWL6lYLpQetr0zmKVlQ4sNsJDg&s" alt="Daniel Clifford" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Daniel Clifford
                    </Typography>
                    <Typography variant="body2">Verified Graduate</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident officia dignissimos, inventore delectus cum animi cupiditate expedita consequatur iusto minima reprehenderit voluptate mollitia ipsam. Ipsum soluta at placeat voluptas! Animi, dolores? Atque magnam laborum aliquid aut laudantium voluptas maiores natus officiis aspernatur. Eveniet eum inventore doloribus obcaecati dicta, nihil fuga suscipit quam dolorem non ratione amet quidem tempora impedit blanditiis, doloremque, placeat odit tempore optio. Dolor, tempore. Voluptas, officia similique.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

         
          <Grid item xs={12} md={4}>
            <Card sx={{backgroundColor: 'rgb(94, 106, 127)',color: 'white',boxShadow:10, borderRadius: 3,height: '100%'}}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuer0-_gMGIwokMbIh_08b2367r-aLWO7mA&s" alt="Jonathan Walters" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Jonathan Walters
                    </Typography>
                    <Typography variant="body2">Verified Graduate</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  The team was very supportive and kept me motivated
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque esse libero sit eveniet impedit ut temporibus exercitationem nostrum ratione quidem.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}  md={4}>
            <Card sx={{backgroundColor: 'white',color: 'black', boxShadow:10,borderRadius: 3,height: '100%'}}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s" alt="Jeanette Harmon" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Jeanette Harmon

                    </Typography>
                    <Typography variant="body2">Verified Graduate</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  An overall wonderful and rewarding experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo cupiditate aliquid deleniti quisquam obcaecati!
                </Typography>


              </CardContent>



            </Card>
          </Grid>



          <Grid item xs={12} sm={6} md={8}>
            <Card sx={{backgroundColor: 'rgb(8, 3, 42)',color: 'white',boxShadow:10,borderRadius: 3,height: '100%'}}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s" alt="Patrick Abrams" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Patrick Abrams
                    </Typography>

                    <Typography variant="body2">Verified Graduate</Typography>
                  </Box>



                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
                </Typography>
                <Typography variant="body2" >
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias est consectetur magni blanditiis unde sed fugit reiciendis voluptas dolore dolor sunt possimus perferendis, quaerat laborum a amet pariatur rerum. Porro!
                </Typography>
              </CardContent>
            </Card>



          </Grid>
        </Grid>




         <Grid item xs={12}  md={3} >
                        
                        
                        
                        <Card sx={{ backgroundColor: '#F3F4F6', color: 'Black',boxShadow:10, borderRadius: 4, height: 800 }}>
                          <CardContent sx={{ p: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ mr: 2 }} src="data:image/jpeg;base64,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" alt="Kira Whittle" />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            Kira Whittle
                          </Typography>
                          <Typography variant="body2">Verified Graduate</Typography>
                        </Box>
                      </Box>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                              Such a life-changing experience. Highly recommended!
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores laboriosam earum? Ut nihil reiciendis voluptatum quidem! Quis neque perspiciatis praesentium placeat maxime totam aspernatur voluptatibus consectetur! Eum distinctio, ratione vel pariatur ad autem! Eaque cum laudantium exercitationem pariatur, dolores adipisci consequatur nulla incidunt necessitatibus impedit quos corrupti, aliquam asperiores facilis saepe, commodi deserunt ad! Qui corporis corrupti error facilis hic illum odit. Modi dolores eligendi repudiandae quisquam totam, quod deleniti? Itaque officiis consequatur labore eos sunt enim. Nostrum, aut? Modi, quasi laudantium. Veritatis deserunt repellat illo laborum incidunt similique architecto id earum explicabo. Similique excepturi ex aspernatur non facilis asperiores, beatae magni. Id beatae commodi accusantium quibusdam earum aperiam quae maxime reprehenderit consequuntur tenetur cum, non, dolore autem odit odio quas dolorum omnis officiis voluptate vero repellendus. Quisquam officia dolorum, ut nostrum laudantium amet quaerat at quos doloribus! Accusamus enim officia, sequi ad quia nihil atque facere sint fugiat consequatur nam. Ratione suscipit quidem asperiores, ducimus incidunt vel corrupti illo minima blanditiis, magni officia molestiae delectus mollitia? Laudantium dolores libero, cumque fuga blanditiis at eligendi fugiat culpa necessitatibus et dolorem iste neque asperiores maxime fugit debitis vitae. Consectetur voluptatibus illum quaerat vel a commodi vero atque ducimus! Repellendus aperiam, ullam ipsam cumque nulla ipsum corporis itaque ad placeat, a cum neque voluptatibus unde harum pariatur praesentium ex animi tempore excepturi labore. Minima dicta doloremque doloribus maxime nihil nesciunt maiores provident repellat nemo magni reprehenderit sed vero unde fuga at, ipsa iure quisquam. Laboriosam at tempore eius magnam iste assumenda molestias pariatur voluptas quas cum, perferendis id adipisci odit doloremque asperiores nihil saepe corrupti! Veritatis assumenda porro repellendus, molestiae repudiandae nisi placeat praesentium, ex nemo eius rerum. Neque sequi ab rem laudantium ratione perferendis quaerat harum ea, dolores perspiciatis unde molestias magni suscipit facere eveniet eos. Non itaque totam repudiandae!
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>



      </Grid>
    </Box>
  );
};

export default App;
>>>>>>> dc5b472b5a6a32e6c4a9baff0cc5264f9911e995
