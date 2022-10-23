import AutofitGrid from "components/AutoFitGrid/AutofitGrid";
import SocialNetworkCard from "components/SocialNetworkCard/SocialNetworkCard";
import { Wrapper } from "components/Wrapper/Wrapper";
import styled from "styled-components";
import { media } from "util/media";

const FEATURES = [
  {
    imageUrl: "/Instagram_logo_2016.svg",
    url: "https://www.instagram.com/av_o_deco/",
    title: "Instagram",
  },
  {
    imageUrl: "/Facebook_f_icon.svg",
    url: "https://www.facebook.com/profile.php?id=100080684193889",
    title: "Facebook",
  },
];
export const SocialNetworks = () => {
  return (
    <Wrapper>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <SocialNetworkCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Wrapper>
  );
};

export const CustomAutofitGrid = styled(AutofitGrid)`
  margin-top: 10rem;
  --autofit-grid-item-size: 30rem;

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`;
