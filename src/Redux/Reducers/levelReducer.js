import img1 from '../../images/bg_home.jpg'
import img2 from '../../images/cack3.png'
import img3 from '../../images/Admin.png'
import img4 from '../../images/user.png'
import img5 from '../../images/dessert-fruitcake.jpg'

const initialState = {
  Level: [],
  levels: [

    {
      id: 1,
      level: [
        { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
        { id: 3, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
      ]

    },

    {
      id: 2,
      level: [
        { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
        { id: 2, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 3, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
      ]

    },

    {
      id: 3,
      level: [
        { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
        { id: 2, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 3, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
      ]

    },

    {
      id: 4,
      level: [
        { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
        { id: 2, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 3, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
      ]

    },

    {
      id: 5,
      level: [
        { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
        { id: 2, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 3, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
      ]

    },

    {
      id: 6,
      level: [
        { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
        { id: 2, value: 'A', flipped: false, matched: false, img: img3 },
        { id: 2, value: 'D', flipped: false, matched: false, img: img4 },
        { id: 3, value: 'C', flipped: false, matched: false, img: img2 },
        { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
      ]

    },






  ]
}

export const levelReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'getLevel':
      const filteredLevels = state.levels.filter(item => item.id == payload);
      return { ...state, Level: filteredLevels };

    default:
      return state
  }
}

