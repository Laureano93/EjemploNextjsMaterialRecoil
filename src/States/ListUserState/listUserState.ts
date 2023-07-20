import { UserModel } from '@/models/userModel';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const listUserFilterState = atom<UserModel[]>({
  key: 'listUsersFilterState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const UserState = atom({
  key: 'UserState',
  default: new UserModel(),
  effects_UNSTABLE: [persistAtom],
});

export const containsFilterState = atom({
  key: 'containsFilterState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const filterUsers = selector({
  key: 'filterUsers',
  get: ({ get }) => {
    if (get(containsFilterState).length === 0) {
      return get(listUserFilterState);
    } else {
      let listFilterUser = get(listUserFilterState).filter((user) => {
        if (user.first_name.includes(get(containsFilterState))) {
          return user;
        }
      });
      return listFilterUser;
    }
  },
});
