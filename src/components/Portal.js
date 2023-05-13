import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function createPortalWrapper() {
    const element = document.createElement("div");
    element.id = "portal-wrapper";
    return element;
}
const portalElement = createPortalWrapper();

const Portal = ({ 
        containerClassname = "", 
        bodyClassname = "", 
        containerStyle = {},
        bodyStyle = {},
        onClose = () => {},
        visible = false,
        children
    }) => {
    useEffect(() => {
        document.body.appendChild(portalElement);
    }, []);

    const renderContent = (
        <div className={`fixed inset-0 z-[9999] ${containerClassname}`} style={containerStyle}>
            <div className="overlay absolute inset-0 bg-black opacity-20" onClick={onClose}></div>
            <div className={`content relative z-10 ${bodyClassname}`} style={bodyStyle}>
                {children}
            </div>
        </div>
    )
    return createPortal(renderContent, portalElement);
};

Portal.propTypes = {
    containerClassname: PropTypes.string, 
    bodyClassname: PropTypes.string, 
    containerStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    onClose: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node,
}

export default Portal;