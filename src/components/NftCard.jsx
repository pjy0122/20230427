import { CgCardHearts } from "react-icons/cg";
import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div className="relative rounded-2xl bg-gray-800 pb-4">
      {parseInt(mintedNft) < tokenId && (
        <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold">
          Not Minted.
        </div>
      )}
      <img className="rounded-t-2xl" src={metadata.image} alt={metadata.name} />
      <div className="mt-4 text-xl font-bold flex items-center px-4 text-yellow-200">
        DaDenBu
        <div className="flex justify-center items-center ml-2 text-red-300">
          <CgCardHearts size={30} />
        </div>
      </div>
      <div className="mt-4 text-2xl font-bold px-4"># {tokenId}</div>
      <div className="mt-4 text-xl flex justify-end px-4">
        <Link to={`/${tokenId}`}>
          <button
            // disabled={true}하면 버튼 기능없어짐
            disabled={parseInt(mintedNft) < tokenId}
            className="bg-green-300 text-gray-950 px-4 py-2 rounded-xl hover:bg-pink-700"
          >
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
