import {  Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <a className="pb-1 block">About</a>
            <a className="pb-1 block">Blog</a>
            <a className="pb-1 block">Press</a>
            <a className="pb-1 block">Jobs</a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <a className="pb-1 block">About</a>
            <a className="pb-1 block">Blog</a>
            <a className="pb-1 block">Press</a>
            <a className="pb-1 block">Jobs</a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <a className="pb-1 block">About</a>
            <a className="pb-1 block">Blog</a>
            <a className="pb-1 block">Press</a>
            <a className="pb-1 block">Jobs</a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <a className="pb-1 block">About</a>
            <a className="pb-1 block">Blog</a>
            <a className="pb-1 block">Press</a>
            <a className="pb-1 block">Jobs</a>
          </div>
        </Grid>
        <Grid className="pt-10" item xs={12}>
        <Typography variant="body2" component="p" align="center">
            &copy; 2023 <p className="inline font-bold tracking-wider">Iternova</p>. All rights reserved.
        </Typography>
       

      </Grid>

      </Grid>
      
    </div>
  );
};

export default Footer;
