import { memo, useMemo } from 'react';

import { useIntl } from 'react-intl';
import { useWindowDimensions } from 'react-native';

import { XStack } from '@onekeyhq/components';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import type { ISwapNetwork } from '@onekeyhq/shared/types/swap/types';

import { NetworksFilterItem } from '../../../components/NetworksFilterItem';

interface ISwapNetworkToggleGroupProps {
  networks: ISwapNetwork[];
  moreNetworksCount?: number;
  isOnlySupportSingleNetWork?: () => boolean;
  onSelectNetwork: (network: ISwapNetwork) => void;
  selectedNetwork?: ISwapNetwork;
  onMoreNetwork: () => void;
}

const SwapNetworkToggleGroup = ({
  networks,
  selectedNetwork,
  onSelectNetwork,
  moreNetworksCount,
  onMoreNetwork,
}: ISwapNetworkToggleGroupProps) => {
  const { width } = useWindowDimensions();
  const intl = useIntl();
  const isWiderScreen = width > 380;
  const filteredNetworks = useMemo(
    () => (isWiderScreen ? networks : networks.slice(0, 4)),
    [networks, isWiderScreen],
  );
  return (
    <XStack px="$5" pt="$1" pb="$3" gap="$2">
      {filteredNetworks.map((network) => (
        <NetworksFilterItem
          key={network.networkId}
          networkImageUri={network.logoURI}
          tooltipContent={
            network.isAllNetworks
              ? intl.formatMessage({ id: ETranslations.global_all_networks })
              : network.name
          }
          isSelected={network?.networkId === selectedNetwork?.networkId}
          onPress={() => {
            onSelectNetwork(network);
          }}
        />
      ))}
      {moreNetworksCount && moreNetworksCount > 0 ? (
        <NetworksFilterItem
          networkName={`${moreNetworksCount}+`}
          flex={1}
          onPress={onMoreNetwork}
        />
      ) : null}
    </XStack>
  );
};

export default memo(SwapNetworkToggleGroup);
