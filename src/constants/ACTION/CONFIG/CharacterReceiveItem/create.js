import ID from '../../ID';

export default ({ character, item }) => ({
  action: ID.CHARACTER_RECEIVE_ITEM,
  payload: {
    character: parseInt(character, 10) || 0,
    item: parseInt(item, 10) || 0,
  },
});
