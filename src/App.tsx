import { createEffect } from "solid-js"
import { createGeolocation } from "@solid-primitives/geolocation"

const App = () => {
    const [location, refetch] = createGeolocation()

    createEffect(async () => {
        console.log(location())
        if (location()) {
            const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${location()?.latitude}&lon=${location()?.longitude}&apiKey=${import.meta.env.VITE_GEO_KEY}`
            var requestOptions = {
                method: 'GET',
            };
            try {
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    },[location])

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default App