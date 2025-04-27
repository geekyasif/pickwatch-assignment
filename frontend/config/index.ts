import type { IConfig } from "~/types"

const config: IConfig = {
    api_url: process.env.API_URL_LOCALHOST as string
}

export default config