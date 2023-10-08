import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  connectors: object;
  supportedChainIds: number[];
}

const ThirdwebWeb3ProviderWithChildren: FC<IProps> = ({
  children,
  connectors,
  supportedChainIds,
}) => (
  <ThirdwebWeb3Provider
    connectors={connectors}
    supportedChainIds={supportedChainIds}
  >
    {children}
  </ThirdwebWeb3Provider>
);

export default ThirdwebWeb3ProviderWithChildren;
