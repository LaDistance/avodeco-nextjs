import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button/Button";
import MailSentState from "components/MailSentState/MailSentState";
import Input from "components/Input/Input";
import { media } from "util/media";

interface EmailPayload {
  name: string;
  email: string;
  description: string;
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Email from contact form",
          ...payload,
        }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && (
          <ErrorMessage>
            Nous n&apos;avons pas pu envoyer votre e-mail. Veuillez réessayer
            ultérieurement.
          </ErrorMessage>
        )}
        <InputGroup>
          <InputStack>
            {errors.name && (
              <ErrorMessage>
                Votre nom est nécessaire pour envoyer le mail.
              </ErrorMessage>
            )}
            <Input
              placeholder="Votre nom"
              id="name"
              disabled={isDisabled}
              {...register("name", { required: true })}
            />
          </InputStack>
          <InputStack>
            {errors.email && (
              <ErrorMessage>
                Votre adresse e-mail est nécessaire pour envoyer le mail.
              </ErrorMessage>
            )}
            <Input
              placeholder="Votre e-mail"
              id="email"
              disabled={isDisabled}
              {...register("email", { required: true })}
            />
          </InputStack>
        </InputGroup>
        <InputStack>
          {errors.description && (
            <ErrorMessage>
              Le corps du message est nécessaire pour envoyer le mail.
            </ErrorMessage>
          )}
          <Textarea
            as="textarea"
            placeholder="Tapez votre message ici..."
            id="description"
            disabled={isDisabled}
            {...register("description", { required: true })}
          />
        </InputStack>
        <Button as="button" type="submit" disabled={isSubmitDisabled}>
          Envoyer
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media("<=tablet")} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
