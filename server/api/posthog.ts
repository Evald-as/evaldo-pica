import { PostHog } from 'posthog-node'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const client = new PostHog(config.posthogApiKey, {
        host: "https://eu.i.posthog.com",
    })

    const query = getQuery(event)
    const userId = query.userId as string
    const city = query.city as string
    const name = query.name as string

    client.identify({
        distinctId: userId,
        properties: {
            city: city,
            name: name,
        },
    })

    try {
        const isPromotionEnabled = await client.isFeatureEnabled('show_promotion_siauliai', userId, {
            personProperties: {
                city: query.city as string,
                name: query.name as string,
            }
        })
        return { isPromotionEnabled }
    } catch (error) {
        console.error('PostHog error:', error)
        return { isPromotionEnabled: false }
    }
}) 