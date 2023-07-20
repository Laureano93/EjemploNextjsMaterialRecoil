import { JsonConvert } from 'json2typescript';
import axiosInstance from '@/utils/axios/axios-config';
import { UserModel } from '@/models/user-model';

export async function getListUsers(): Promise<UserModel[] | []> {
  let userList: UserModel[] = [];

  await axiosInstance.get('users?page=2').then((response: any) => {
    let jsonConvert: JsonConvert = new JsonConvert();

    let dataUsers = jsonConvert.deserializeArray(response.data.data, UserModel);

    userList = dataUsers;
  });

  return userList;
}
