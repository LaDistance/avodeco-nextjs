import NextImage from "next/image";
import styled from "styled-components";

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function BasicCard({
  title,
  description,
  imageUrl,
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
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.3rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  padding-top: 1rem;
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;
