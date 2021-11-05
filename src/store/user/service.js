import { get, post } from '../../services/api';
import getUserId from '../../services/getUserId';
import { SET_USER_NAME, EDIT_USER } from '../mutations.type';
import router from '../../router';

const requestGetUserName = async (commit) => {
  const id = getUserId();
  const res = await get(`user/info?id=${id || null}`);

  commit(SET_USER_NAME, res?.data?.name);
};

const requestEditUser = async (commit, newName) => {
  const id = getUserId() || null;
  const res = await post(`user/edit-user-name?id=${id}`, { newName });
  localStorage.setItem('id', res?.data?.id);

  if (!id && res?.data?.id) router.push('/');
  commit(EDIT_USER, res?.data?.name);
};

export { requestGetUserName, requestEditUser };
