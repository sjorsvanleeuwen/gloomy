import {
  CLASS_CONFIG,
  GLOBAL_ACHIEVEMENT,
  ITEM_CONFIG,
  ITEM_TYPE,
  PERMISSION_RULE_CONFIG,
} from '../../../../constants';

const starterClasses = () =>
  Object.entries(CLASS_CONFIG).reduce((obj, [key, val]) => (!val.starter ? obj : { ...obj, [key]: true }), {});

const starterEventDeck = () => ({
  top: Array(30)
    .fill(0)
    .map((_, i) => i + 1),
  bottom: [],
});

const isStarterItem = item => item.type === ITEM_TYPE.PROSPERITY && item.prosperity === 1;

const starterItems = () =>
  Object.entries(ITEM_CONFIG).reduce(
    (obj, [key, val]) => (isStarterItem(val) ? { ...obj, [key]: val.count } : obj),
    {},
  );

const starterPermissions = () =>
  Object.values(PERMISSION_RULE_CONFIG)
    .map(r => r.default)
    .join('');

export default (campaign, { payload: { gist, history } }) => ({
  id: gist.id,
  name: gist.description,
  dt: gist.created_at,
  by: gist.owner.login,
  owner: gist.owner.login,
  contributors: [],
  permissions: starterPermissions(),
  history,
  achievements: { [GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC]: 1 },
  characters: {},
  cityEvents: starterEventDeck(),
  classes: starterClasses(),
  augments: {},
  donations: 0,
  envelopes: {},
  items: starterItems(),
  parties: {},
  reputationBounds: { min: 0, max: 0 },
  players: {},
  prosperity: 0,
  roadEvents: starterEventDeck(),
  scenarios: {},
  notes: '',
});
