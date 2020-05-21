import React from 'react'

const SearchContext = React.createContext({
    coursesResponse: [],
    questionResponse: [],
    loggedIn: false,
    user: {},
    goToAuth: () => {},
    setSearch: (text) => {},
    searchForQuestions: (text) => {},
    markQuestion: (id) => {},
    searchForCoursess: (text) => {},
    markCourse: (id) => {},
    modalSubmit: ({text, email, url}) => {}

})

export const SearchProvider = SearchContext.Provider

export default SearchContext