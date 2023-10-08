# Next JS Pokemon Explorer

### Architecture:
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Spec:
- Build an App using NextJS and using the [Pokemon API endpoint](https://pokeapi.co/) for content.
- The application will fetch data, render it, and provide various filtering and pagination capabilities.
- On the wallet page the application integrates web3 functionality to allow users to connect their wallets
- Test coverage

#### Considerations / Notes:

There are a few interesting points to highlight:
- The app main image uses Cloudinary, and specifically the removeBG functionality. Its done a half decent job of removing the background image via AI.. COOL 😎
- Its mobile first so looks fairly decent on all screens.
- A few interactions and effects have been added, mostly on hover. In order to add a bit of sparkle and delight to the user. ✨
- The list view has a nice 'dancing' animation on the pokemon images, in the style of the 'Charmander dance'. 🕺
- The main pokemon pages have a shake animation as if the character is being tickled.
- SHAME: Had to resort to more use of "use client" than I would have liked, as still getting to grips with Nextjs 13 app router, and its proving tricky to master this new architectural pattern.
- SHAME: The ThirdwebWeb3Provider would simply not accept children no matter what I tried Typesafe wise. Even an HOC with children setup as accepted types did not work. Which is very odd considering Providers by their very nature should accept children. I sadly had to resort to a much maligned ts-ignore for this, apologies 😔
- SHAME: I ran out of time to complete a more in depth Web3 integration as per the test requirements, so I hope what I have done is enough as a talking point.
  
## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load PokemonFont, a local font that matches the Pokemon look and feel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
