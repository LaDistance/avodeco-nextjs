import NextImage from "next/image";
import styled from "styled-components";

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string | null;
}

export default function BasicCard({
  title,
  description,
  imageUrl,
  price,
}: BasicCardProps) {
  return (
    <Card>
      <NextImage
        style={{
          borderRadius: "25px",
          // Visible box shadow on image
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
        }}
        src={imageUrl}
        width={256}
        height={256}
        alt={title}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        {price ? `Disponible à partir de ${price}` : "Disponible sur devis"}
      </Price>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 1rem;
  color: rgb(var(--text));
  font-size: 1.3rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  :hover {
    background-color: hsla(0, 0%, 71%, 0.664);
    border: 0px;
    transition: background-color 0.4s ease;
  }
`;

const Title = styled.div`
  padding-top: 1rem;
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
  width: 60%;
  text-align: justify;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
