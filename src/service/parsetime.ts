import { BadRequestError } from '../exception/BadRequestError'

class ParseTimeService {
  getIsoDate(iso: string) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(iso as string)) {
      throw new BadRequestError('Wrong ISO date format!')
    }
    return new Date(iso)
  }

  parsetime(iso: string) {
    const date = this.getIsoDate(iso as string)

    return {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    }
  }

  unixtime(iso: string) {
    const date = this.getIsoDate(iso as string)

    return {
      unixtime: date.getTime(),
    }
  }
}

export const parsetimeService = new ParseTimeService()
