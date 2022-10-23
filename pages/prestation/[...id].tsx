import Page from "components/Page/Page";
import styled from "styled-components";
import { media } from "util/media";
import InformationSection from "components/InformationSection/InformationSection";
import FormSection from "components/FormSection/FormSection";

export default function ContactPage() {
  return (
    <Page title="Nous contacter">
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
