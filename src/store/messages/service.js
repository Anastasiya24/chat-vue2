import { get, post } from '../../services/api';
import getUserId from '../../services/getUserId';
import { SET_MESSAGES_LIST, SET_NEW_MESSAGE } from '../mutations.type';

const requestGetMessagesList = async (commit) => {
  const id = getUserId();
  const res = await get(`messages/list?id=${id || null}`);
  commit(SET_MESSAGES_LIST, res?.data);
};

const requestAddNewMessage = async (commit, text) => {
  const id = getUserId();
  const res = await post(`messages/new-message`, {
    message: {
      senderId: id,
      text,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    },
  });
  commit(SET_NEW_MESSAGE, res?.data);
};

export { requestGetMessagesList, requestAddNewMessage };
