import type { ServiceType } from "./serviceType"

export interface LinkSession {
    linkTag: String,
    sessionExpireDate: Date
    serviceType: ServiceType
}