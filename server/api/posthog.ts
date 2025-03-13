import { PostHog } from 'posthog-node'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const client = new PostHog(config.posthogApiKey, {
        host: "https://eu.i.posthog.com",
    })

    const query = getQuery(event)
    const userId = query.userId as string

    try {
        const isPromotionEnabled = await client.isFeatureEnabled('show_promotion_siauliai', userId)
        return { isPromotionEnabled }
    } catch (error) {
        console.error('PostHog error:', error)
        return { isPromotionEnabled: false }
    }
}) 