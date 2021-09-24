import React from "react";
import useDataManager from "../../hooks/useDataManager";
import { useIntl } from "react-intl";
import {
  ErrorContainer,
  ErrorListContainer,
  Flex,
  FlexShrink,
  SVG,
  H3,
  ErrorTitle,
} from "./components";
function ErrorDisplay() {
  const { formatMessage } = useIntl();
  let { formErrors } = useDataManager();

  const errorsArray = Object.entries(formErrors);

  if (errorsArray.length > 0) {
    return (
      <ErrorContainer>
        <Flex>
          <FlexShrink>
            <SVG>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </SVG>
          </FlexShrink>
          <div>
            <H3>
              {formatMessage(
                { id: "custom.error" },
                { count: errorsArray.length }
              )}
            </H3>
            <ErrorListContainer>
              <ul role="list">
                {errorsArray.map(([field, errObj]) => (
                  <li key={field}>
                    <ErrorTitle>{field}:</ErrorTitle>
                    <span>{formatMessage(errObj)}</span>
                  </li>
                ))}
              </ul>
            </ErrorListContainer>
          </div>
        </Flex>
      </ErrorContainer>
    );
  } else return null;
}

export default ErrorDisplay;
