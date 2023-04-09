import { Context, Quester, Schema } from 'koishi'
import createPacProxyAgent from 'pac-proxy-agent'

export interface Config {}

export const name = 'PAC'

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context, config: Config) {
  Quester.defineAgent(createPacProxyAgent.protocols, createPacProxyAgent)
}
