import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo-strapi.svg";

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme.main.colors.leftMenu["background-header-link"]};
  height: ${(props) => props.theme.main.sizes.leftMenu.height};
  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }
  .projectName {
    display: block;
    width: 100%;
    height: ${(props) => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 100% 100%;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: { bg: "red" },
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;