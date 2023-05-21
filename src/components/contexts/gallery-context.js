import { createContext, useContext, useState } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";

// Fake Data
const fakeData = [
    {
        id: 1,
        url: "https://plus.unsplash.com/premium_photo-1674236550362-58a7fdd7f899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        isLike: false,
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        isLike: false,
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
        isLike: false,
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
        isLike: false,
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        isLike: false,
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
        isLike: false,
    },
];

const GalleryContext = createContext();
// Custom hook useGallery
function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === "undefined")
        throw new Error("useGallery must be used within GalleryProvider");
    return context;
}

function GalleryProvider(props) {
    const [ storedValue, setValue ] = useLocalStorage("photos", fakeData);
    const [ storedCart, setStoredCart ] = useLocalStorage("cartItem", []);
    const [ photos, setPhotos ] = useState(storedValue);
    const [ cartItems, setCartItems ] = useState(storedCart);
    const [ favoriteList, setFavoriteList ] = useState([]);

    function toggleFavorite(photoId) {
        const updatedArray = photos.map((photo) => {
            if (photo.id === photoId) {
                return { ...photo, isLike: !photo.isLike };
            }
            return photo;
        });
        setPhotos(updatedArray);
        setValue(updatedArray);
    }

    function addToCart(newItem) {
        setCartItems((prevItems) => {
            // Kiem tra phan tu da ton tai trong cart
            const isExisted = prevItems.some((item) => item.id === newItem.id);
            if (isExisted) {
                setStoredCart([...prevItems]);
                return [...prevItems];
            }
            setStoredCart([...prevItems, newItem]);
            return [...prevItems, newItem];
        });
    }

    function removeCartItem(itemId) {
        setCartItems((itemCart) => {
            const cartIsNotRemove = itemCart.filter((item) => item.id !== itemId)
            setStoredCart(cartIsNotRemove);
            return cartIsNotRemove;
        });
    }
    function removeAllCartItem() {
        setCartItems([]);
        setStoredCart([]);
    }

    const value = {
        photos,
        setPhotos,
        cartItems,
        setCartItems,
        favoriteList,
        setFavoriteList,
        toggleFavorite,
        addToCart,
        removeCartItem,
        removeAllCartItem
    };
    return (
        <GalleryContext.Provider
            value={value}
            {...props}
        ></GalleryContext.Provider>
    );
}

export { useGallery, GalleryProvider };
