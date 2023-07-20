import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box textAlign={'center'}>
      <Typography variant={'h3'}>Ejemplo Uso Recoil Y Material Ui</Typography>
      <Button component={Link} href={'/user-list'}>
        Ver Usuarios
      </Button>
    </Box>
  );
}
