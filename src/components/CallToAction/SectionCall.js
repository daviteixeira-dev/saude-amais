import React from 'react'
import { Box, Grid, Button } from "@mui/material/";

function SectionCall(){
  return (
    <section>
      <Box>
        <Grid container py={4} direction="row" alignItems="center" justifyContent="space-around" sx={{ bgcolor: "#a8a8a8" }}>
          <Grid item>
            <Button variant="contained">Ajendar uma Aula</Button>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}

export default SectionCall