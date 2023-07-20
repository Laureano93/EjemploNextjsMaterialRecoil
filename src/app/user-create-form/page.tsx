'use client';
import { listUserFilterState } from '@/states/user-list-state/user-list-state';
import { UserModel } from '@/models/user-model';
import { Box, Button, TextField } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

export default function UserCreateFormPage() {
  const router = useRouter();
  const SetUserState = useSetRecoilState(listUserFilterState);
  const listUsers = useRecoilValue(listUserFilterState);

  const newUser: UserModel = new UserModel();
  function createUser() {
    newUser.id =
      listUsers!.reduce((acumulator, currentValue) => {
        return acumulator > currentValue ? acumulator : currentValue;
      }).id + 1;

    const lista: UserModel[] = [];

    listUsers.forEach((user) => lista.push(user));

    lista.push(newUser);

    SetUserState(lista);

    router.push('/listuser');
  }
  return (
    <Box component={'form'} sx={{ marginTop: '63px' }}>
      <TextField
        type='text'
        size='small'
        sx={{ ml: 2 }}
        label='Email'
        onChange={(e) => (newUser.email = e.target.value)}
      />
      <TextField
        type='text'
        label='Nombre'
        sx={{ ml: 2 }}
        size='small'
        onChange={(e) => (newUser.first_name = e.target.value)}
      />
      <TextField
        type='text'
        size='small'
        sx={{ ml: 2 }}
        label='Apellidos'
        onChange={(e) => (newUser.last_name = e.target.value)}
      />
      <Button onClick={() => createUser()} sx={{ ml: 2 }}>
        Crear Usuario
      </Button>
    </Box>
  );
}
