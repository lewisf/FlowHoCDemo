// @flow

declare module 'recompose' {
  declare export type HOC<Props> = Class<React$Component<void, Props, void>>;

  declare export function withProps<CPOP: {}, DP, TP: {}, IP: $Diff<TP, CPOP>>(
    createProps: (ownerProps: IP) => CPOP
  ): (baseComponent: Class<React$Component<DP, TP, *>>) => HOC<IP>
}