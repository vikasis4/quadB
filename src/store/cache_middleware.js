const cache_middleware = (storeAPI) => (next) => (action) => {

    const result = next(action);
    // after running the next function, we can get the updated state and thus can store in localstorage
    localStorage.setItem('data', JSON.stringify(storeAPI.getState().todo));

    return result;
};

export default cache_middleware;
