import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const TaslExtermalLink = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title="Opent task link in new tab"
    >
      <FaExternalLinkAlt />
    </a>
  );
};

export default TaslExtermalLink;
