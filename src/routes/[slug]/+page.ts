import { error } from '@sveltejs/kit';
import type { LinkSession } from '../types/linkSession';
import { ServiceType } from '../types/serviceType';
import type { PageLoad } from './$types';

let testSession : LinkSession = {
    linkTag: "Test",
    sessionExpireDate: new Date(new Date().getTime() + 1000000000000),
    serviceType: ServiceType.MAP_NUMERIZER
}

let linkSessions: LinkSession[] = [testSession]

export const load = (({ params }) => {
    if (isValidSession(params.slug) == true) {
        return getSession(params.slug)
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;


function isValidSession(tag: String) {
    let returnValue = false
    linkSessions.forEach((element) => {
        if (element.linkTag == tag && element.sessionExpireDate.getTime() > Date.now()) {
            returnValue = true
        }
    })
    return returnValue
}

function getSession(tag: String) {
    let returnValue
    linkSessions.forEach((element) => {
        if (element.linkTag == tag) {
            returnValue = element
        }
    })
    return returnValue
}