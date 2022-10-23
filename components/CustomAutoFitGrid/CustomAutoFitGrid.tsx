import AutofitGrid from "components/AutoFitGrid/AutofitGrid";
import styled from "styled-components";
import { media } from "util/media";

export const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`;
