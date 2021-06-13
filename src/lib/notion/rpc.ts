import fetch, { Response } from 'node-fetch'
import { API_ENDPOINT, NOTION_TOKEN } from './server-constants'

export function getFullBlockId(blockId: string) {
  if (typeof blockId !== 'string') {
      throw Error(`blockId: ${typeof blockId} must be string`)
  }
  if (blockId.match("^[a-zA-Z0-9]+$")) {
      return blockId.substr(0, 8) + "-"
          + blockId.substr(8, 4) + "-"
          + blockId.substr(12, 4) + "-"
          + blockId.substr(16, 4) + "-"
          + blockId.substr(20, 32)
  } else {
      return blockId
  }
}

export default async function rpc(fnName: string, body: any) {
  if (!NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN is not set in env')
  }
  const res = await fetch(`${API_ENDPOINT}/${fnName}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: `token_v2=${NOTION_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  if (res.ok) {
    return res.json()
  } else {
    throw new Error(await getError(res))
  }
}

export async function getError(res: Response) {
  return `Notion API error (${res.status}) \n${getJSONHeaders(
    res
  )}\n ${await getBodyOrNull(res)}`
}

export function getJSONHeaders(res: Response) {
  return JSON.stringify(res.headers.raw())
}

export function getBodyOrNull(res: Response) {
  try {
    return res.text()
  } catch (err) {
    return null
  }
}

export function values(obj: any) {
  const vals: any = []

  Object.keys(obj).forEach(key => {
    vals.push(obj[key])
  })
  return vals
}
