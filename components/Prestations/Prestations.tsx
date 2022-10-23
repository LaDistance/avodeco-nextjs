import BasicCard from "components/BasicCard/BasicCard";
import { CustomAutofitGrid } from "components/CustomAutoFitGrid/CustomAutoFitGrid";
import { Wrapper } from "components/Wrapper/Wrapper";

const FEATURES = [
  {
    imageUrl: "/etiquette.png",
    title: "Étiquettes",
    description:
      "Tout est réalisable, autocollante ou non, forme de votre choix. Pour les accrocher avec un beau fil autour d'un bocal, d'une bouteille ou à coller sur les verres, les carafes, le produit à bulles de vos enfants.",
    price: "0,20€ par étiquette",
  },
  {
    imageUrl: "/grid-icons/asset-2.svg",
    title: "Faire-part",
    description:
      "Imprimez les photos de votre enfant pour sa naissance ou son baptême, les photos de votre rencontre pour votre mariage, ou tout autre événement. Le texte peut être imprimé ou écrit au stylo.",
    price: null,
  },
  {
    imageUrl: "/tasse.png",
    title: "Tasses",
    description:
      "Impression sur tasse de la photo de votre choix. De l'image, du texte... C'est votre choix ! Tout est réalisable.",
    price: "14,99€",
  },
  {
    imageUrl: "/friandise.png",
    title: "Friandises personnalisées",
    description:
      "Smarties, Kinders, M&M's... nous habillons vos friandises pour personnaliser votre événement jusqu'au bout. Texte, image, photo : tout est possible.",
    price: "1,75€ par sachet",
  },
  {
    imageUrl: "/arche.png",
    title: "Location arche de ballons",
    description:
      "Pour sublimer vos événements, nous vous proposons notre arche qui s'accroche sur une table ou des chaises. ",
    price: "15€",
  },
];
export const Prestations = () => {
  return (
    <Wrapper>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Wrapper>
  );
};
