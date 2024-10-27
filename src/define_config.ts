/**
 * @boringnode/bus
 *
 * @license MIT
 * @copyright BoringNode
 */

import type { ManagerConfig, TransportConfig } from './types/main.js'

export function defineConfig<KnownTransports extends Record<string, TransportConfig>>(
  config: ManagerConfig<KnownTransports>
): ManagerConfig<KnownTransports> {
  return config
}
