import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Dex Token</span>
          </h1>
          <p className="text-center text-lg">Dex Token is a an ERC-20 token with openzepplin</p>
          <p className="text-center text-lg">
            To interact with the token contract please click on interact with token{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              At the top
            </code>
          </p>
          <p>
            If you came here from the Decentralized exchange project please connect your wallet i.e preferably metamask
            and mint some dex tokens for yourself.
          </p>
          <p>
            After which call the approve function with the contract address of the exchange and the amount of dex token
            you want to use.
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
