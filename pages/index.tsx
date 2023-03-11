import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import SecBanner1 from "@/components/pages/sec-1-banner";
import SecAccess2 from "@/components/pages/sec-2-access";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trendify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[200vh] relative">
        <Header />
        <SecBanner1 />
        <SecAccess2 />
        <div className="space-50vh"></div>
        <Footer />
        <div className="absolute z-[-10] h-fit w-fit top-0 right-0">
          <Image
            src={"./images/big-cube.svg"}
            height={951}
            width={615}
            alt="logo"
          />
        </div>
      </main>
    </>
  );
}
