const apiEndpoint = 'https://bstlopuprojekt.azurewebsites.net'

const apiGet = (path) => fetch(apiEndpoint + path)
    .then(response => response.json())


    function getInstructors () {
        return apiGet('/api/instructors')
    }
    
    function getCourse () {
        return apiGet('/api/courses')
    }

    function getCourseById (id) {
        return apiGet('/api/courses/' + id)
    }
    
    const getCourseId = async (id) => {
        return await apiGet('/api/courses/' + id);
    }
    
    function getPackages () {
        return apiGet('/api/packages')
    }
    
    function getEvent () {
        return apiGet('/api/events')
    }
    
    function getAbout () {
        return apiGet('/api/abouts')
    }

    function getSchedule () {
        return apiGet('/api/events')
    }

    function getLesson () {
        return apiGet('/api/lessons')
    }
    
    /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
    export default {
        getInstructors,
        getCourse,
        getPackages,
        getEvent,
        getAbout,
        getSchedule,
        getLesson,
        getCourseId,
        getCourseById
    }