const loginDataState = {
  isLoading: false,
  username: '',
  password: '',
  errors: [],
  isSuccess: false,
};

const initialState = {
  loginData: loginDataState,
};

export { loginDataState };
export default initialState;
