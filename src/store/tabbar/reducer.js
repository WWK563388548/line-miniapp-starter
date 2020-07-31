import Item1 from '../../assets/icons/homeIcon.png'
import Item2 from '../../assets/icons/orderIcon.png'
import Item3 from '../../assets/icons/myIcon.png'  

const defaultState = {
  tabItems: [
    {
      itemName: 'item1',
      key: 'item1',
      icon: Item1
    },
    {
      itemName: 'item2',
      key: 'item2',
      icon: Item2
    },
    {
      itemName: 'item3',
      key: 'item3',
      icon: Item3,
    },
    {
      itemName: 'item4',
      key: 'item4',
      icon: Item1,
    },
  ],
  activeKey: 'item1',
};
  
export default (state = defaultState, action ) => {
  switch (action.type) {
    default:
      return state;
  }
}