import {useEffect, useState }from 'react'

const Header = () => {
    /*const[suppliers, set] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:8070/api/worlouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])*/

    return(
        <div className = "header">
            <h2>Header</h2>
        </div>
    )
}

export default Header;