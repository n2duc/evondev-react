import React from 'react'
import { GalleryProvider } from './gallery-context'
import PhotoList from './PhotoList'
import CartList from './CartList'
import HeaderContext from './HeaderContext'

const PhotoContext = () => {
    return (
        <GalleryProvider>
            <HeaderContext></HeaderContext>
            <PhotoList></PhotoList>
            <CartList></CartList>
        </GalleryProvider>
    )
}

export default PhotoContext