# Best Bank Global

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/BestBankGlobal.ts
TS_NODE_FILES=true npx ts-node scripts/BestBankGlobal.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# BSC verification

To try out BSC verification, you first need to deploy a contract to an BSC network that's supported by BSC

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your BSC API key, your BSC node URL, and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network testnet scripts/BestBankGlobal.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --contract contracts/BestBankGlobal.sol:BestBankGlobal 0x835eeceB4cEF7Aa6A471bcdF0AA3d3b7CbDb3Ddd "BestBankGlobal" "BBG" --network testnet``

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

Testnet BSC Contract : 0x835eeceB4cEF7Aa6A471bcdF0AA3d3b7CbDb3Ddd
Mainnet BSC Contract : 0x6EF7671283e5DA47aa62451ff291cce450D18985
