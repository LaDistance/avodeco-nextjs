import { getURL } from "next/dist/shared/lib/utils";
import NextImage from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface SocialNetworkCardProps {
  title: string;
  imageUrl: string;
  url: string;
}

export default function SocialNetworkCard({
  title,
  imageUrl,
  url,
}: SocialNetworkCardProps) {
  return (
    <Link href={url}>
      <Card>
        <NextImage
          style={{
            borderRadius: "25px",
            // Visible box shadow on image
          }}
          src={imageUrl}
          width={256}
          height={256}
          alt={title}
        />
        <Title>{title}</Title>
      </Card>
    </Link>
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
  cursor: pointer;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  padding-top: 1rem;
`;
