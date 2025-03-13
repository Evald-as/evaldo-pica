import { v4 as uuidv4 } from 'uuid'

interface PostHogResponse {
    isPromotionEnabled: boolean
}

export default defineNuxtPlugin(async () => {
    console.log("flags plugin");
    const userId = useCookie('pica_user_id', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365 // 1 year
    })

    const city = useCookie('pica_city', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365 // 1 year
    })

    const name = useCookie('pica_name', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365 // 1 year
    })

    if (!userId.value) {
        const newIdentity = uuidv4()
        userId.value = newIdentity
    }

    if (!city.value) {
        const cities = ['Siauliai', 'Vilnius', 'Kaunas']
        const randomCity = cities[Math.floor(Math.random() * cities.length)]
        city.value = randomCity
    }

    if (!name.value) {
        const names = ['Jonas', 'Petras', 'Matas', 'Lukas', 'Tomas', 'Marija', 'Ona', 'Elena', 'Laura', 'Lina']
        const randomName = names[Math.floor(Math.random() * names.length)]
        name.value = randomName
    }

    const { data: posthogData } = await useFetch<PostHogResponse>(`/api/posthog?userId=${userId.value}&city=${city.value}&name=${name.value}`)

    return {
        provide: {
            isPromotionEnabled: posthogData.value?.isPromotionEnabled ?? false
        }
    }
})