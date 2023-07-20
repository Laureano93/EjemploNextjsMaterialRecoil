import { Grid } from '@mui/material';

export default function FormCreateUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      width={'100%'}
      sx={{ marginBottom: '20px' }}>
      {children}
    </Grid>
  );
}
