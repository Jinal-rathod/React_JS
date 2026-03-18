import { useContext } from "react";
import { WishlistContext } from "../components/wishlist/WishlistContext.jsx";
import TopNavbar from "../components/TopNavbar.jsx";

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <>
            <TopNavbar />
            <div className="max-w-6xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-10">My Wishlist</h1>

                {wishlist.length === 0 ? (
                    <p className="text-4xl text-center my-20">No items in wishlist</p>
                ) : (
                    wishlist.map((item, index) => (
                        <div key={index} className="border p-4 mb-2 flex gap-4 items-center">
                            <img src={item.image} className="w-16" />
                            <div>
                                <p>{item.name}</p>
                                <p className="font-bold">₹{item.price}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Wishlist;