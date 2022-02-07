import Head from "next/head";

export default function Header({ pageTitle }) {
  return (
    <Head>
      <meta name="keywords" content="Color, Image, Copy, Superb, Colors, Hex" />
      <meta
        name="description"
        content="Get your Favourite Color Pallete Here"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Superbcolors | {pageTitle} </title>
      <link rel="shortcut icon" href="/superb_logo.ico" type="image/x-icon" />
    </Head>
  );
}
