const initialState = {
  showModal: false,
};

const otpModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default otpModalReducer;
