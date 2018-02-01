
export const CURRENT_ITEM = 'CURRENT_ITEM';

export function currentItem(item) {
  return {
    type: CURRENT_ITEM,
    payload: item
  };
}
