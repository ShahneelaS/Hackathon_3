import React from "react";

interface SocialShareProps {
  productName: string; 
}

const SocialShare: React.FC<SocialShareProps> = ({ productName }) => {
  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(productName)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      productName
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="social-share">
      <p>Share {productName} on social media:</p>
      {/* Add your social media share buttons */}
      <button
        className="bg-blue-600 text-white p-2 rounded"
        onClick={handleShareFacebook}
      >
        Share on Facebook
      </button>
      <button
        className="bg-purple-600 text-white p-2 rounded ml-2"
        onClick={handleShareTwitter}
      >
        Share on Twitter
      </button>
    </div>
  );
};

export default SocialShare;
