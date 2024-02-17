import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
} from "react-share";

function SocialIntegration({ itemLink }) {

    return (
        <div>
            <FacebookShareButton url={itemLink}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
        </div>
    );
}

export default SocialIntegration;
