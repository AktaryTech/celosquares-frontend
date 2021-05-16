
## The App

Based on this nightmare: https://docs.celo.org/developer-guide/start/web-dapp

1. `git@github.com:AktaryTech/celosquares-frontend.git`
2. `yarn`
3. `yarn dev`
4. Goto localhost:3000

## For celo blockchain:

Based on this other nightmare: https://docs.celo.org/developer-guide/development-chain

### Chrome Extension
Install this fork of MetaMask: 

https://chrome.google.com/webstore/detail/celoextensionwallet/kkilomkmpmkbdnfelcpgckmpcaemjcdh?hl=en

### Install the Celo MonoRepo

This will launch the blockchain. Be patient, it take some time to get setup. Some help can be found here: https://docs.celo.org/developer-guide/development-chain#celo-cli

*** THIS WILL ONLY RUN ON node 12. Install nvm to make the change ***

1. `git clone git@github.com:celo-org/celo-monorepo.git`
2. `yarn && yarn build --ignore docs`
3. `cd packages/sdk/contractkit/`
4. `yarn test:reset && yarn test:livechain`
5. Wait. Should end with "Ganache STARTED"
6. Open a new terminal and `cd packages/sdk/contractkit/`
7. `yarn celocli account:list`

This last item should show the list of public keys realate to the private keys listed here:

ACCOUNT_PRIVATE_KEYS = [
  ‘0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d’,
  ‘0x5d862464fe9303452126c8bc94274b8c5f9874cbd219789b3eb2128075a76f72’,
  ‘0xdf02719c4df8b9b8ac7f551fcb5d9ef48fa27eef7a66453879f4d8fdc6e78fb1’,
  ‘0xff12e391b79415e941a94de3bf3a9aee577aed0731e297d5cfa0b8a1e02fa1d0’,
  ‘0x752dd9cf65e68cfaba7d60225cbdbc1f4729dd5e5507def72815ed0d8abc6249’,
  ‘0xefb595a0178eb79a8df953f87c5148402a224cdf725e88c0146727c6aceadccd’,
  ‘0x83c6d2cc5ddcf9711a6d59b417dc20eb48afd58d45290099e5987e3d768f328f’,
  ‘0xbb2d3f7c9583780a7d3904a2f55d792707c345f21de1bacb2d389934d82796b2’,
  ‘0xb2fd4d29c1390b71b8795ae81196bfd60293adf99f9d32a0aff06288fcdac55f’,
  ‘0x23cb7121166b9a2f93ae0b7c05bde02eae50d64449b2cbb42bc84e9d38d6cc89’,
]

Add a private key to the Celo Wallet thing.








****** ALL THE ORIGINAL STUFF *******

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
