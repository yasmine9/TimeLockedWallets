# Time-Locked wallet

This is a smart contracts project implementing time locked wallets.
The idea is about locking funds in crypto wallet contracts, not allowing the owners to withdrawal their tokens until a certain condition is met related to time.

## Contracts overview

- `TimeLockedWallet.sol` represents the wallet of a user where funds are locked.
- `TimeLockedWalletFactory.sol` represents the factory where `TimeLockedWallet` contracts are geenrated for different users. It is also responsible for setting different parameters.
- `BetaToken.sol` ERC20 token that is used during tests.


### Useful ressources (To learn more)

- Why using address.transfer/send is no longer safe --> use call. `https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/`.
- using payable fallback functions for receiving Ether is not recommended, since it would not fail on interface confusions). -- READMORE...
