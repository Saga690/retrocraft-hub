import { useEffect, useState } from 'react'

const getCurrentUser = () => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userloc = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(userloc);
    }, [])

    return currentUser;
}

export default getCurrentUser