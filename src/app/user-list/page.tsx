'use client';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  containsFilterState,
  filterUsers,
  listUserFilterState,
} from '@/states/user-list-state/user-list-state';
import { getListUsers } from '@/services/user-list-service';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';

export default function UserListPage() {
  const [contains, setContains] = useRecoilState(containsFilterState);
  const router = useRouter();
  const setListFilterUser = useSetRecoilState(listUserFilterState);
  const listFilterUsers = useRecoilValue(filterUsers);
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      minWidth: 900 / 4,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 900 / 4,
    },
    {
      field: 'first_name',
      headerName: 'Nombre',
      minWidth: 900 / 4,
    },
    {
      field: 'last_name',
      headerName: 'Apellidos',
      minWidth: 900 / 4,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      if (listFilterUsers.length == 0) {
        await getListUsers().then((response) => setListFilterUser(response));
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        width={'100%'}
        sx={{ marginBottom: '20px' }}>
        <h1>Lista Usuarios</h1>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'>
          <Button
            onClick={() => router.push('/formcreateuser')}
            variant='contained'>
            Crear Usuario
          </Button>
        </Grid>
        <Box>
          <DataGrid
            columns={columns}
            rows={listFilterUsers}
            pageSizeOptions={[4]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 4,
                },
              },
            }}
            sx={{
              width: 930,
              backgroundColor: 'primary.dark',
            }}
          />
        </Box>
      </Grid>

      <Grid
        container
        spacing={1}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={240}
        xs={12}>
        <FormControl>
          <FormLabel>Filtro Por Nombre</FormLabel>
          <TextField
            value={contains}
            required
            onChange={(e) => setContains(e.target.value)}></TextField>
        </FormControl>
      </Grid>
    </>
  );
}
