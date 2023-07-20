import { JsonConvert } from 'json2typescript';
import axiosInstance from '@/utils/axios/axiosConfig';
import { UserModel } from '@/models/userModel';

export async function getListUsers(): Promise<UserModel[] | []> {
  let listausuarios: UserModel[] = [];

  await axiosInstance.get('users?page=2').then((response: any) => {
    let jsonConvert: JsonConvert = new JsonConvert();

    let dataUsers = jsonConvert.deserializeArray(response.data.data, UserModel);

    listausuarios = dataUsers;
  });

  return listausuarios;
}
