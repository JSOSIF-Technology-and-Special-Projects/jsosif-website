import React from "react";

const MapComponent: React.FC = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2830.849372159465!2d-83.0679!3d42.3037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cd3804c7337%3A0x8e16b77569b212f7!2sOdette%20School%20of%20Business!5e0!3m2!1sen!2sca!4v1684598584371!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
