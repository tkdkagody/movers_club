//action types 
export const GET_SEARCH_VALUE = " GET_SEARCH_VALUE";
export const GET_FILTERED_ARR = "GET_FILTERED_ARR";




export const getSearchValue = (word) => {
    return {
        //todo
        type: GET_SEARCH_VALUE,
        payload: {
            searchValue : word,
        } 
    }
}

export const getFilterdArr = (filteredArr) => {
    return {
        type:GET_FILTERED_ARR,
        payload: {
            filteredVideo : filteredArr
        }
    }
}
