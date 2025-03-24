import React, { useEffect, useState } from "react";
import BackToTopIcon from "../common/icons/BackToTopIcon";
import ChatIcon from "../common/icons/ChatIcon";

const ChatsComponent = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-20 right-12 z-50 flex flex-col items-end space-y-2">
      {showBackToTop && (
        <div onClick={scrollToTop} className="cursor-pointer">
          <BackToTopIcon />
        </div>
      )}
      <div>
        <ChatIcon />
      </div>
    </div>
  );
};

export default ChatsComponent;
