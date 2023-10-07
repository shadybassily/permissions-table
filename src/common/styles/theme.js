import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {},
  theme_palette: {
    orange:'#F25500',
    orange2:'#D92C32',
    oliveGreen:'#3FABAE',
    gray:'#939393'
  },
  components: {
    MuiButton: {
      defaultProps: {
         disableRipple: true, // No more ripple, on the whole application !
         disableElevation: true,
      },
      styleOverrides: {
         root: {
            // Some CSS
            borderRadius: '4px',
            '&:hover': {
              //  backgroundColor: 'primary',
            },
            padding: "8px 0px",
            width:"220px",
            fontFamily: "Jost",
            textTransform: "capitalize",
            fontSize:'18px',
            fontWeight:'400'
         },
      },
   },
   MuiTableCell :{
    styleOverrides: {
      root: {
      // border:'1px solid',
      textTransform:'capitalize',
      },
   },
   }
  },
});
