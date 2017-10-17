const loginDataState = {
    isLoading: false,
    errors: [],
    isSuccess: false,
    token: null,
    name: null
};

const voteDataState = {
    isLoading: false,
    errors: [],
    isSuccess: false
}

const initialState = {
    loginData: loginDataState,
    voteData: voteDataState
};

export { loginDataState, voteDataState };
export default initialState;
