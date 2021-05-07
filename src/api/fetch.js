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
    
    function getEvents () {
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

    function getFaqs () {
        return apiGet('/api/faqs')
    }
    
    /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
    export default {
        getInstructors,
        getCourse,
        getPackages,
        getEvents,
        getAbout,
        getSchedule,
        getLesson,
        getCourseId,
        getCourseById,
        getFaqs
    }