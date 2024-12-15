export function getUTCTimeZone(zone: string) {
    const currTime = new Date()
    const hour = (currTime.getUTCHours() + +zone) * 30
    const minute = currTime.getUTCMinutes()
    const second = currTime.getUTCSeconds()
    return {hour, minute, second}
}