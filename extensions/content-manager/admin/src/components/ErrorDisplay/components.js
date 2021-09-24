import styled from "styled-components";
const ErrorContainer = styled.div`
  padding: 16px;
  background: #fef2f2;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const Flex = styled.div`
  display: flex;
`;
const FlexShrink = styled.div`
  flex-shrink: 0;
`;
const SVG = styled.svg`
  color: #f87171;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const H3 = styled.h3`
  font-size: 14px;
  color: #991b1b;
  font-weight: 500;
`;
const ErrorTitle = styled.span`
  font-size: 14px;
  color: #991b1b;
  font-weight: 500;
  margin-right: 3px;
`;
const ErrorListContainer = styled.div`
  color: #b91c1c;
  font-size: 14px;
`;
export {
  ErrorListContainer,
  ErrorContainer,
  FlexShrink,
  Flex,
  SVG,
  H3,
  ErrorTitle,
};
